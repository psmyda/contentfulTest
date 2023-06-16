import { createClient } from "contentful";

class ContentfulService {
    contentfulClientApi = createClient({
        accessToken: "nlYde6hGa_MS0B0Ip1pMMQFGs0icI_ntabFjMhrjaUw",
        space: "q0fnx0gj00da"
    });

    getEntries = async (query: any) => {
        const response = await this.contentfulClientApi.getEntries(query);
        console.log(response);
        return response.items[0].fields;
    }
}

export default new ContentfulService();
