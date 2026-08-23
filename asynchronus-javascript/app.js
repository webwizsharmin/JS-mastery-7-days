// Modern way to fetch API
async function fetchData() {
  try {
    // 1. Send the network request
    const result = await fetch("https://jsonplaceholder.typicode.com/users/1");

    // check if the HTTP Status code is successful(200-299)
    if (!result.ok) {
      throw new Error(`HTTP error! Status:${result.status}`);
    }

    // 3. Parse the stream data into a JSON object
    const data = await result.json();
    console.log(data);
  } catch (error) {
    // 4.Catch network failures or parsing errors
    console.error("Failed to fetch data:", error);
  }
}
