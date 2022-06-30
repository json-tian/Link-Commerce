# Link Commerce
 
### Selling online has never been easier.
 
## Team Members
 
* Jason Tian <jas.tian@mail.utoronto.ca>
* Darryl Huang <darrylyl.huang@mail.utoronto.ca>
* Zongda Wang <zongda.wang@mail.utoronto.ca>
 
## Description
 
Link Commerce aims to boost conversion rate for ecommerce sales driven by social media by allowing anyone to create their own single page ecommerce store with single tap checkout.
 
Link Commerce is a single page ecommerce store creator that merchants can use to design their single page ecommerce store. Anyone can start their own ecommerce store in minutes without writing a single line of code. Begin first by visiting the user’s ADMIN page where they can design their single page store by adding in their headline, style the background and font, add their products, and launch their store. Payment from customers will be automatically accepted through Apple Pay or Google Pay so payment setup is easy for the merchant and customers can checkout faster.
 
Merchants and customers can then see the fully functional store at the STORE page. Merchants will be able to choose their own custom subdomain for their store so they could share their store on social media such as an Instagram bio or a TikTok video.
 
## Challenge Factor Concepts
 
* OAuth 2.0 Client. We want multiple users to be able to manage a single shop with different permissions. In addition, customer accounts should not be able to authorize the shop’s admin page.
No-code/low-code platforms. Link Commerce is built for the merchant to be able to create their ecommerce store by interacting with our Admin page UI without writing a single line of code.
* Integration with cloud technologies. To store our product images, we will use Google Cloud Storage to store the images over cloud.
* Scalability. With scalability in mind, we will set up load balancing using Redis and kubernetes clusters and implement our GraphQL with batch loading so that it can scale well.
* In-depth work with technology. React. We will use hooks, contexts to store our frontend state and possibly Redux
 
## Beta Version Key Features
 
Admin Page
* Merchants can register for an account through Google SSO
* Merchants can design basic elements of their store such as the heading text, and the site background color.
* Merchants can create simple products with the product title, description, image, and price. Images will be stored on the cloud.
Shop Page
* Each merchant account has a designated subdomain where anyone has access to view the shop created from the Admin Page and can customize the subdomain
 
## Final Version Key Features
 
Admin Page
* Merchants can authorize other staff using OAuth 2.0 to be able to edit the store
* Customers could create a customer account to get their shipping info, order details, and favorite shops.
Shop Page
* Each shop will be able to accept payment from either Google Pay or Apple Pay
 
## Tech Stack
 
Frontend: React

Backend: Ruby on Rails + GraphQL backend API

Cloud: Deploy on Google Cloud, Google Cloud Storage for image storage

Database: MySQL
 
## Method of Deployment

We will deploy our application on Google Cloud. Since we use a Ruby on Rails backend, we will configure an environment to deploy on Google Cloud and utilize their $300 free trial in credits to host our application. Other 3rd party services such as our payments will also be used in conjunction.

We have listed the following resources to help guide us through the deployment process:

[(1) Deploy Ruby On Rails On Google Cloud - YouTube](https://www.youtube.com/watch?v=3d7xBvmu6Z4)<br>
[Running Rails on Google Cloud | Ruby](https://cloud.google.com/ruby/rails)

We will follow the steps:
1. Sign up for Google Cloud, create a project, use the $300 in free credits
2. Set up GCP App Engine, configuring app.yaml (the configuration for the packages, libraries, dependencies used by Ruby on Rails and React
3. Set up Cloud SQL for our database, get secret keys and connect to application
4. Deploy the app!
5. Register a domain and point the DNS address of domain to Google Cloud specific one
