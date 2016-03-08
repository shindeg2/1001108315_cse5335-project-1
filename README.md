== README
Web Data Management Project 1
Gayatri Narayan Shinde
1001108315

1]  What server framework did you choose and why?
I chose Ruby on rails as my server framework, because Rails is a MVC framework which provides default structures for databases, web pages and web services. Also the rich documentation was useful during the process of doing this project.

2] What client framework did you choose and why?
I used Jquery as my client framework as it simplifies the interaction between HTML and Javascript. Event handling and Ajax calls to use API that works accross various browsers is simplified.

3] What aspect of the implementation did you find easy, if any, and why?
Once the application was ready, hosting it on heroku was the easiest part. Adding files on git and then deploying the application on heroku according to the instructions available on their respective websites, was easiest compared to building the application.

4] What aspect of the implementation did you find hard, if any, and why?
Retrieving the data from the REST API and displaying it in tabular format, Google map and chart was comparatively tricky but not hard. Considering the entire project developing the application was little tough but manageable.

5] What components OTHER than your client and server framework did you install,
if any, and if so, what is their purpose for your solution?
I didnot have to add any other components apart from client ans server framework.

6] What Ubuntu commands are required to deploy and run your server?
Once my application was ready and I had placed my files correctly according to the rails documentation, I used following commands to deploy my app on heroku.
rails server //  http://localhost:3000  //checking if the application is working properly locally
git status // check if changes are made.
git add -A // adding the files not yet updated in the repository to the staging area.
git commit -m "message" //committing the changes made with a message to remember why that commit was done.
git push  //asks github username and password. Adding the files to github
git push heroku  // https://mysterious-taiga-41477.herokuapp.com/    // deployed successfully if not then you can view logs and make changes.



Please feel free to use a different markup language if you do not plan to run
<tt>rake doc:app</tt>.
