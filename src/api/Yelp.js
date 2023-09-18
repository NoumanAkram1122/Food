import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer dBNuMu7idV7ilCTV2aS7mg8o5Nbh9ptI3WeDq8qn6XPjjWVqaLXXLN0vWVCCHsUjGT8TZGtBE6InGUkTaCsO9sTppSjPIPu-OtsT--WEFcPIHWh74djFAT2R3UQIZXYx',
  },
});
