import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BsFileImage } from "react-icons/bs";
import { IoMdDownload } from "react-icons/io";
import { uploadImage } from "../FileUploader/ImageUpload";
import alert from "../Notification/Alert";
import chatsRepository from "@/repositories/chatsRepository";
import { saveAs } from "file-saver";
import moment from "moment";

export function FileMessageWithProgress({
  socket,
  chatId,
  message,
  file,
  userId,
}) {
  const [progress, setProgress] = useState();
  const uploadFile = async () => {
    await uploadImage(
      file,
      async (url, success) => {
        if (success) {
          const newObj = {
            chatId,
            messageBody: {
              ...message,
              ...{
                attachment: url,
              },
            },
          };
          try {
            const { result } = await chatsRepository.createMessage(newObj);
            console.log(userId);
            socket.emit("send-message-staff", userId, result);
          } catch (error) {
            alert.showErrorAlert(error);
          }
        }
      },
      setProgress
    );
  };
  useEffect(() => {
    if (file && message.attachment === "attachment") uploadFile();
  }, []);

  const handleDownload = () => {
    saveAs(message?.attachment, "image.jpg");
  };

  return (
    <div className="w-32">
      <div className="flex justify-between">
        <BsFileImage className="inline w-6 h-6 justify-end" />
        <button onClick={handleDownload}>
          <IoMdDownload className="inline w-6 h-6 justify-end" />
        </button>
      </div>

      <span className="block">{message?.message}</span>
      <span>{moment(message?.time).format("DD/MM/YYYY HH:mm")}</span>
      {progress < 100 && (
        <div className="relative h-2 bg-gray-300">
          <div
            className="absolute top-0 left-0 h-2 bg-green-500"
            style={{
              width: `${progress}%`,
            }}
          ></div>
        </div>
      )}
    </div>
  );
}
