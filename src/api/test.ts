import request from "@/api/index";

export default async () => {
    return await request.get('/test_data.json');
}