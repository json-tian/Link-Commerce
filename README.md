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
 
* No-code/low-code platforms. Link Commerce is built for the merchant to be able to create their ecommerce store by interacting with our Admin page UI without writing a single line of code.
* Integration with cloud technologies. We will integrate with Stripe to implement single tap purchases with Google Pay. To store our product images, we will use Firebase Storage to store the images over cloud.
* Non-trivial frontend. We are using the Polaris components library to design our UI. Polaris has various components to help design our store admin page.
* In-depth work with technology. Ruby. We implemented our backend API using Ruby on Rails. Ruby on Rails is a full-stack framework but we have decided to use a cool Ruby on Rails feature to only use Rails as an API so that we could use React as our frontend. This is a specialization of Ruby on Rails.
 
## Beta Version Key Features
 
Admin Page
* Merchants can register for an account through Google SSO
* Merchants can design basic elements of their store such as the heading text, and the site background color.
* Merchants can create simple products with the product title, description, image, and price. Images will be stored on the cloud.

Shop Page
* Each merchant account has a designated subdomain where anyone has access to view the shop created from the Admin Page and can customize the subdomain
 
## Final Version Key Features
 
Admin Page
* Merchants could receive payment through Google Pay from customers
* Merchants could view the orders that they have received

Shop Page
* Each shop will be able to accept payment from Google Pay
 
## Tech Stack
 
Frontend: React

Backend: Ruby on Rails API only

Cloud: Deploy on Google Cloud, Firebase Storage for image storage, Stripe Google Pay integration

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
