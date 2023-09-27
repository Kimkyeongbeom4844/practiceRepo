const fetchRequestButton = document.querySelector(".fetchRequestButton");
const axiosRequestButton = document.querySelector(".axiosRequestButton");

let fetchController = null;
let axiosController = null;

const fetchRequest = () => {
  fetchRequestButton.disabled = true;
  fetchController = new AbortController();
  setTimeout(async () => {
    try {
      const res = await fetch("./src/data.json", {
        signal: fetchController.signal,
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error.name);
    } finally {
      fetchRequestButton.disabled = false;
      fetchController = new AbortController();
    }
  }, 2000);
};

const fetchCancel = () => {
  fetchController?.abort();
};

const axiosRequest = (e) => {
  axiosRequestButton.disabled = true;
  axiosController = new AbortController();
  setTimeout(async () => {
    try {
      const { data } = await axios.get("./src/data.json", {
        signal: axiosController.signal,
      });
      console.log(data);
    } catch (error) {
      console.log(error.name);
    } finally {
      axiosRequestButton.disabled = false;
      axiosController = new AbortController();
    }
  }, 2000);
};

const axiosCancel = () => {
  axiosController?.abort();
};
