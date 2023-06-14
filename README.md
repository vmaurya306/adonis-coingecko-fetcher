# Adonis Coingecko API Fetcher

This project demonstrates a simple Adonis command that fetches data from the Coingecko API and stores it in a PostgreSQL database.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/adonis-coingecko-fetcher.git

   ```
2. Navigate to the project directory
    ```bash
    cd adonis-coingecko-fetcher
    ```
3. Install the dependencies
    ```bash
    npm install
    ```
## Database configuration

    ```
    DB_CONNECTION=pg
    DB_HOST=your_database_host
    DB_PORT=your_database_port
    DB_USER=your_database_user
    DB_PASSWORD=your_database_password
    DB_DATABASE=your_database_name
    ```

## Usage
    To fetch data from the Coingecko API and store it in the database, run the following command:

    ```bash
    node ace fetch:coin:datum
    ```

    The command will fetch data from the Coingecko API endpoint and store it in the coin_data table in the configured PostgreSQL database.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License
 
This project is licensed under the MIT License.

```
Make sure to update the installation instructions with the correct steps and provide any additional information that might be relevant to your project.

Feel free to modify and customize the README file based on your specific project requirements and preferences.

If you have any further questions, feel free to ask!
```


   



