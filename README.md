
# TypeScript-Webapp Setup Instructions

To set up and run the TypeScript-Webapp project, follow these steps:

## Step 1: Navigate to the Project Directory

First, navigate to the project directory called `local-news-network`. You can do this using the `cd` command:

```bash
cd path/to/local-news-network
```

## Step 2: Install Dependencies

Once you are inside the `local-news-network` directory, you need to install the project dependencies. This involves using both `npm` and `pip` for JavaScript and Python dependencies respectively.

### Installing JavaScript Dependencies (Node.js)

In your terminal, run the following command to install JavaScript dependencies using `npm`:

```bash
npm install
```

### Installing Python Dependencies (Virtual Environment)

To install Python dependencies, it's a good practice to use a virtual environment. First, make sure you have Python installed. Then, create a virtual environment and activate it:

```bash
python -m venv venv_name
source venv_name/bin/activate
```

Once the virtual environment is activated, you can install the Python dependencies listed in `requirements.txt` using `pip`:

```bash
pip install -r requirements.txt
```

## Step 3: Running the Project

To run the TypeScript-Webapp project, you'll need to open two separate terminal windows, both within the `local-news-network` directory.

### Terminal 1: Start the JavaScript Development Server

In the first terminal, start the JavaScript development server using the following command:

```bash
npm run dev
```

This command will compile and serve your TypeScript-Webapp, making it accessible in your web browser.

### Terminal 2: Start the Python Server

In the second terminal, make sure your virtual environment is activated (as mentioned in Step 2). Then, start the Python server:

```bash
source venv_name/bin/activate
python server.py
```

Running these two commands simultaneously will enable your web application to function with the front-end served by the JavaScript development server and the back-end served by the Python server.

With these steps, your TypeScript-Webapp project should be up and running locally. You can access it in your web browser at the specified URL.
```

You can copy and paste this Markdown text into a Markdown file for documentation purposes.
