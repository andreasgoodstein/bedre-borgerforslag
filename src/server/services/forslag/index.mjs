import Service from "../service/index.mjs";

const FORSLAG_URL = "https://www.borgerforslag.dk/api/proposals/search";

const forslagsOptions = {
  body: JSON.stringify({
    sortOrder: "NewestFirst",
    searchQuery: "",
    pageNumber: 0,
    pageSize: 1024,
  }),
};

export class ForslagService extends Service {
  async getAllForslag() {
    const forslag = await this.post(FORSLAG_URL, forslagsOptions);

    return forslag.data || [];
  }
}

export default ForslagService;
