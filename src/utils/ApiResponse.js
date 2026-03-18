class ApiResponse {
  constructor(statusCode, data, message = "success") {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.success = statusCode < 400;
  } // explain all the code written in this class and how it works in comments format show  me the summary of this code in one line and also explain how to use this class in your project and what are the benefits of using this class in your project

  // The ApiResponse class is a utility class designed to standardize the structure of API responses in a project.
  // It takes three parameters: statusCode, data, and an optional message (defaulting to "success").
  // The constructor initializes the properties of the class based on these parameters.
  // The success property is determined by checking if the statusCode is less than 400, indicating a successful response.
}
