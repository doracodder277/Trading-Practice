## What is Wall Street?
Wall Street is a virtual stock trading web application made using React. This application intends to help future investors learn the ups and downs of the stock market and build a portfolio of stocks for themselves. Beginning with a sum of **$10,000** you get a chance to get accustomed to the buying and selling of stocks, track your progress over a period of time and make yourself ready to conquer the stock market.

## Why Wall Street?

The stock market has always been considered a risky business, infact, some might even go to the extents of calling these investments as gambles. Wall Street is a Web Application that will prove otherwise. With access to virtual money and a starting sum of **$10,000**, Wall Street will enable you to build your very own portfolio from scratch. Here, you get a chance to learn about how the stock market operates in the real world, find your way through profits and losses and gain a practical hand on experience of this trade business without the risk of stepping into the real stock exchange.  


## Installation

You need to have Node installed on your local machine. [Node](https://nodejs.org/en/)

NPM(Node Package Manager is already bundled with Node). You can use yarn as well. Install Yarn from [here](https://yarnpkg.com/lang/en/docs/install/)

To run the project

```
yarn/npm install
yarn/npm start
```

Yarn can be replaced by npm. 

The above command will start the frontend

To start the backend
```
cd v2/backend
yarn/npm install
yarn/npm start
```

The App uses a [Mongo database](https://docs.mongodb.com/v3.2/administration/install-community/) so you will need to start a mongo service first on your local machine or if you don't want local mongo instance you can use [mLab](http://mlab.com). Replace your mLabURI with the local one in v2/backend/models/mongoose-setup.js and put your username and password in a .env file. Sample env file is given backend/.env.sample. Just replace it with your mLab credentials and rename the file to .env

To add a feature request just create an issue.


Enjoy!!


