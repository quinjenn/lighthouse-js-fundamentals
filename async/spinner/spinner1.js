process.stdout.write("hello from spinner1.js... \rheyyy\n");

const spinnerAnimation = () => {
  setTimeout(() => {
    process.stdout.write("\r|   ");
  }, 150);

  setTimeout(() => {
    process.stdout.write("\r/   ");
  }, 300);

  setTimeout(() => {
    process.stdout.write("\r-   ");
  }, 450);

  setTimeout(() => {
    process.stdout.write("\r\\   ");
  }, 600);

  setTimeout(() => {
    process.stdout.write("\r|   ");
  }, 750);

  setTimeout(() => {
    process.stdout.write("\r/   ");
  }, 900);

  setTimeout(() => {
    process.stdout.write("\r-   ");
  }, 1050);

  setTimeout(() => {
    process.stdout.write("\r\\   ");
  }, 1200);
};

spinnerAnimation();
