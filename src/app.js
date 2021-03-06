const { Movie, movieArray } = require("./utils");

const app = (args) => {
  switch (args[2]) {
    case "add":
      const movie = new Movie(args[3], args[4], args[5]);
      movie.add();
      console.log(movieArray);
      break;
    case "add multi":
      const movie1 = new Movie(args[3], args[4], args[5]);
      const movie2 = new Movie(args[6], args[7], args[8]);
      movie1.add();
      movie2.add();
      console.log(movieArray);
      break;
    default:
      console.log("Incorrect command");
      break;
  }
};
app(process.argv);
