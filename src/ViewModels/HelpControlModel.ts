import { makeAutoObservable } from "mobx";
import { CountryInfo, getCountryByName } from "../api/apiService";

class HelpControlModel {
  inputValue: string = "";
  searchResults: CountryInfo[] = [];
  isLoading = false;
  maxhints: number;
  searchOpen: boolean = false;

  constructor(maxhints: number) {
    this.maxhints = maxhints;
    makeAutoObservable(this);
  }

  setValue(value: string) {
    this.inputValue = value;
    this.search();
    this.searchOpen = true;
    if (!value.length) {
      console.log("sadasd");
      this.searchOpen = false;
    }
  }

  setInputValue(value: string) {
    this.inputValue = value;
    this.searchOpen = false;
  }

  async search() {
    this.isLoading = true;
    const results = await getCountryByName(this.inputValue);

    let unicueArr: CountryInfo[] = results
      .slice(0, this.maxhints)
      .reduce((acc: CountryInfo[], country: CountryInfo) => {
        const x = acc.find((item: CountryInfo) => item.name === country.name);
        if (!x) {
          return acc.concat([country]);
        } else {
          return acc;
        }
      }, []);

    this.searchResults = unicueArr.slice(0, this.maxhints);

    this.isLoading = false;
  }
}

export default HelpControlModel;
