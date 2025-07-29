# register_login_app
A simple application to Register Users and login using those credentials

## STEPS TO ACCESS AND RUN THE PROJECT
1. Install backend dependenccies :
   ```
   ```
   cd register-login-app/backend
   npm install

   ```
   ```
2. Set Up .env File :
   ```
   ```
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD= enter your mysql password
    DB_NAME= enter the db name
   ```
   ```
3. Install Frontend Dependencies:
   ```
   ```
   cd ../frontend
   npm install
   ```
   ```

4. Run the following commands in MySQL Workbench to create the database schema:
   ```
   ```
   create database register_login_app;
   use register_login_app;

  create table app_users (
	  id int auto_increment primary key,
    appUser_name varchar(100),
    email varchar(100) unique,
    appUser_passw varchar(255) 
  );
   ```
   ```

5. Run the App:
   - back end
     ```
     ```
     cd ../backend
     node server.js   # or nodemon server.js if you install nodemon

     ```
     ```
   - front end
     ```
     ```
     cd frontend
     npm start
     ```
     ```












   
