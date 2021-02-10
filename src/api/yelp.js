import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses/",
  headers: {
    Authorization:
      "Bearer pVXmyS4sqOMYxCPOPXiTLXxwDO68NQJm4XnKkELsKg44VgzyfyjM5ntW-ba65FX0m30v6ZDtYq0dp799N0EaIeGZHlxpNTs9209fp0YdpdQu6ehEWEKex-yN5QscYHYx",
  },
});

// Client ID
// PcBWFCraZfMsAXTXyO7NCQ

// API Key
// pVXmyS4sqOMYxCPOPXiTLXxwDO68NQJm4XnKkELsKg44VgzyfyjM5ntW-ba65FX0m30v6ZDtYq0dp799N0EaIeGZHlxpNTs9209fp0YdpdQu6ehEWEKex-yN5QscYHYx
