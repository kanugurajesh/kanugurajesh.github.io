---
title: 'Deploying a Website to Azure Static Web Apps'
excerpt: 'Azure Static Web Apps is a cloud platform provided by Microsoft Azure that simplifies the process of building and deploying modern web applications or static content along with serverless APIs.'
coverImage: '/assets/blog/Azure/cover.png'
date: '2023-12-12T05:35:07.322Z'
author:
  name: Kanugu Rajesh
  picture: '/assets/blog/authors/rajesh.jpg'
ogImage:
  url: '/assets/blog/Azure/cover.png'
---

## Prerequisites:

**1. Azure Account:** Make sure you have an active Azure account. If not, you can create one here.

**2. GitHub Repository:** Your website's source code should be hosted on a GitHub repository.

**3. Azure CLI:** Install the Azure Command-Line Interface (CLI) if you haven't already. You can download it from here.

## Steps:

**1. Create a GitHub Repository:**
If you don't have a GitHub repository for your website, create one and push your website's source code to it.

**2. Set Up Azure Static Web Apps:**
Go to the Azure Portal.

Click on __Create a resource__ and search for __Static Web Apps__.

Click on __Static Web Apps__ in the results and then click the __Create__ button.

Fill in the required information, including your subscription, resource group, instance details, and build settings. Make sure to choose the GitHub repository that contains your website's source code.

Click __Review + create__ and then __Create__ to deploy the Static Web App.

**3. Configure Build Settings:**
Azure Static Web Apps can automatically build and deploy your application. Ensure that the build settings are configured correctly. This usually involves specifying the build folder (e.g., dist or public) and the build script (e.g., npm install && npm run build for a Node.js app).

**4. Review and Complete Deployment:**
Review your settings and click __Review + create__ to ensure everything is correct. Click __Create__ to start the deployment process.

**5. Wait for Deployment:**
Azure will now deploy your Static Web App. This may take a few minutes. You can monitor the progress in the Azure Portal.

**6. Access Your Website:**
Once the deployment is complete, go to the Static Web App resource in the Azure Portal. Navigate to the __Settings__ tab and find the __URL__. This is the URL where your website is hosted.

**7. Custom Domain (Optional):**
If you have a custom domain, you can configure it in the __Custom domains__ section of your Static Web App in the Azure Portal.

Congratulations! Your website is now deployed to Azure Static Web Apps. Any changes you push to your GitHub repository will automatically trigger a new deployment, making the process seamless.