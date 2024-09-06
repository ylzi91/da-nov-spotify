
 const fillMusicSection = async (artistName) => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
          artistName
      );
      if (response.ok) {
        const arrayTemp = [];
        let { data } = await response.json();
        for (let i = 0; i < 4; i++) {
          arrayTemp.push(data[i]);
        }
        return arrayTemp;
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (err) {
      console.log("error", err);
    }
  };

  export default fillMusicSection