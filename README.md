# web-security
An SQL and XSS vulnerable application

## What is it?
This is a college work for a System Security subject. The application must be vulnerable to SQL injection and XSS attacks,
and have the same application, but in a safe version, that is located at the branch [safe](https://github.com/Isaius/web-security/tree/safe).

The SQL Injection is an type of vunerabilty that comes out when the data received form the user is not handled and is directly put inside a SQL query to the database. This is a VERY VERY dangerous thing that used to happen years ago, but now is pretty hard to find one library or framerok that is not safe when using a database, even using Raw Queries.

The XSS Attack, Cross-site Scripting, consists in adding some tags for the HTML page that execute some JavaScript code. This attack uses the user trust on the site to work as this vunerability runs in the client side and by that the server is not affected. To work, the HTML page must be rendered in the server before sended to the client. This way is Server Side Rendering (SSR) and for that we used the templating engine of Mozilla [Nunjucks](https://mozilla.github.io/nunjucks/)

## Setting it up

To run this application you must have Node installed. You can download it [here](https://nodejs.org/en/)

Then, in the project folder run the following commands to install the dependencies and set all up for testing:

```sh
npm install

npm run knex:migrate

npm run populate

```

The second command is for create the database, a file named `database.sqlite` in the folder `src/database/` . 
The third is for run a seed file that inserts some data in the database to have something to see and test.

After that, to really run the server:

```sh
npm start
```

This will start a node application listening on http://localhost:3333/, just open it on your browser.

## Testing for real

Just make sure that your'e in the master branch. If not:

```sh
git checkout master
```

### SQL Injection

In this application, the SQL Injection vulnerability occours at the login. The SQL query to login is just verify if the username and password received match in the database. The full string is like this, where the input are concatenated:

```sql
SELECT * FROM users WHERE username=’inputUsername’ AND password=’inputPassword’
```

To test it you can try any SQL query in the fields, but here an example:

<strong>username</strong>: `haha' or 'a'='a`<br>
<strong>password</strong>: `hacker' or 'a'='a'; delete from users; select * from users where name='asdfr`

This will erase all data from the table `users`. To restart the database, just run the populate command again any time.

### XSS

In this appication, the XSS vulnerability is under the comments section. All comments are sended to the server and stored for when another request for the comments page arrive it will be included on the rendered page. The comment made is also added to the comment section, but this is client side and because that will not work before reload the page. 
Some examples:

```html
That's all folks<script>alert('HACKER');</script>

<script type="text/javascript">document.location.href = 'http://www.google.com' </script>
```

Just an alert, but if you use the second script the page will ALWAYS redirect to google. To fix this just run again the populate command to reset the database.

## Safe Version 

To test the safe version make sure that your'e at the safe branch:

```sh
git checkout safe
```

And just repeat the unsafe process above and see it not working anymore.
