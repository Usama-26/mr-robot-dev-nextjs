import Repository, { baseUrl, getError } from './genericRepository';

const routes = {
    getBlogs: '/blogs',
    subscribeNewsLetter: '/users/newsletterusers',
    getUserIp: '/visitors-location',
};

class CombineRepositiory {
    async getBlogs() {
        try {
            const request = await Repository.get(
                `${baseUrl}${routes.getBlogs}`
            );
            const { data } = request;
            return {
                results: data,
            };
        } catch (error) {
            throw getError(error);
        }
    }
    async subscribeNewsLetter(email) {
        try {
            const request = await Repository.post(
                `${baseUrl}${routes.subscribeNewsLetter}`,
                email
            );
            const { data } = request;
            return {
                results: data,
            };
        } catch (error) {
            throw getError(error);
        }
    }
    async getUserDetails() {
        try {
            const request = await Repository.get(
                `${baseUrl}${routes.getUserIp}`
            );
            const { data } = request;
            return {
                results: data,
            };
        } catch (error) {
            throw getError(error);
        }
    }
}

export default new CombineRepositiory();
