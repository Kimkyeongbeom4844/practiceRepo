const fetchRequestButton = document.querySelector(".fetchRequestButton");
const axiosRequestButton = document.querySelector(".axiosRequestButton");

const fetchController = new AbortController();
const axiosController = new AbortController();

const fetchRequest = () => {
  fetchRequestButton.disabled = true;
  setTimeout(async () => {
    try {
      const res = await fetch("./src/sample.json", {
        signal: fetchController.signal,
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error.name);
    } finally {
      fetchRequestButton.disabled = false;
    }
  }, 2000);
};

const fetchCancel = () => {
  fetchController.abort();
};

const axiosRequest = (e) => {
  axiosRequestButton.disabled = true;
  setTimeout(async () => {
    try {
      const { data } = await axios.get("./src/sample.json", {
        signal: axiosController.signal,
      });
      console.log(data);
    } catch (error) {
      console.log(error.name);
    } finally {
      axiosRequestButton.disabled = false;
    }
  }, 2000);
};

const axiosCancel = () => {
  axiosController.abort();
};
