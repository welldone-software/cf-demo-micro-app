
### Use this guide to familiarize yourself with basic Codefresh functionality, and to get started quickly and easily.
Codefresh is a workflow platform for development teams that streamlines the entirety of the Docker images lifecycle. Codefresh allows teams to realize the benefits of improved workflow with Docker, including easy collaboration, streamlined testing, and a simplified deployment process. Although system administrators and Devops have been quick to adopt Docker, developers face a significant learning curve when trying to realize the benefits in their own swim lanes. By stitching together the entire workflow of the Docker ecosystem in an easily-consumed web interface, CodeFresh allows all stakeholders to benefit from Docker. In this way, CodeFresh brings Docker to the masses.

Services can be spun up easily from a Dockerfile in an existing repo, or from a Codefresh template that is customized to your technology stack. Because services are deployed in a production-like environment, Codefresh compositions include all of the same components your live deployment environment uses. Codefresh environments can be shared among all stakeholders by simply sharing a URL, allowing everyone from the developer, to QA, to product and project managers to instantly see the effects of each individual commit against the production stack.

## Setting Up Your Codefresh Account
* Register with [Codefresh](https://g.codefresh.io/signup) for FREE with your GitHub or Bitbucket account. Codefresh will link your repository information, and you’ll be able to add services from your current codebase.

**Welcome to Codefresh! Please have a look around the platform, and e-mail us with feedback. We appreciate all feature requests, comments, and questions.**

![cf signup](https://github.com/welldone-software/cf-demo-micro-app/blob/master/gettings-started/images/cf-signup.png)

## Quickstart Demo Using Node.js
* [Fork (or clone+push) our sample app repo](https://github.com/welldone-software/cf-demo-micro-app) for the purposes of this demo, or use your own repository.
* From the Codefresh console, click the `SERVICES` option on the left.
* Click `ADD SERVICE`.
![cf getting started 1](https://github.com/welldone-software/cf-demo-micro-app/blob/master/gettings-started/images/cf-getting-started-1.png)
* Choose your existing or forked Repository from step `1`, as well as your Branch, and then click `NEXT`.
![cf getting started 2](https://github.com/welldone-software/cf-demo-micro-app/blob/master/gettings-started/images/cf-getting-started-2.png)
* Choose the Dockerfile from the Repository under `YES, IN MY REPO`.
* Click `NEXT`.
![cf getting started 3](https://github.com/welldone-software/cf-demo-micro-app/blob/master/gettings-started/images/cf-getting-started-3.png)
* Review the results and click `Close & Build`.
![cf getting started 5](https://github.com/welldone-software/cf-demo-micro-app/blob/master/gettings-started/images/cf-getting-started-5.png)
![cf getting started 6](https://github.com/welldone-software/cf-demo-micro-app/blob/master/gettings-started/images/cf-getting-started-6.png)
* Click on `+'s` to see more information from the logs.
![cf getting started 7](https://github.com/welldone-software/cf-demo-micro-app/blob/master/gettings-started/images/cf-getting-started-7.png)
**+ Congratulations! You’ve got your first service automatic image build set up. Whenever you push to the repository, Codefresh will automatically build your Docker image, as well as notify of any failures in the process.**
* Click on your avatar in the upper right corner to pull down the menu.
* Click `ACCOUNT MANAGEMENT` to access your account settings.
![cf getting started 22](https://github.com/welldone-software/cf-demo-micro-app/blob/master/gettings-started/images/cf-getting-started-22.png)
* Click `INTEGRATION`.
![cf getting started 23](https://github.com/welldone-software/cf-demo-micro-app/blob/master/gettings-started/images/cf-getting-started-23.png)
* Click the `CHECKBOX` next to the `DOCKER ICON`, labeled `Enable in order to activate docker hub integration`.
* Enter your Docker Hub username and password.
![cf getting started 24](https://github.com/welldone-software/cf-demo-micro-app/blob/master/gettings-started/images/cf-getting-started-24.png)
* Click on `SERVICES` on the left, in the sidebar navigation.
* Click on the ![settings.sprocket](https://github.com/welldone-software/cf-demo-micro-app/blob/master/gettings-started/images/gear.png) for your new service.
![cf getting started 8](https://github.com/welldone-software/cf-demo-micro-app/blob/master/gettings-started/images/cf-getting-started-8.png)
* Make sure `IMAGE NAME` matches your docker hub username and repo path (e.g. docker_hub_user/repo)
![cf getting started 21](https://github.com/welldone-software/cf-demo-micro-app/blob/master/gettings-started/images/cf-getting-started-21.png)
* Click `Push to Docker Registry` and then click [Docker Hub](http://hub.docker.com/).
* Scroll down and click `SAVE`.

**Great news! Your image will now be pushed to the Docker Hub registry on every successful build.**
* Click `BUILDS` on the left, in the sidebar navigation.
![cf getting started 9](https://github.com/welldone-software/cf-demo-micro-app/blob/master/gettings-started/images/cf-getting-started-9.png)
+ *From here, you can view the repository triggers that have been built into containers. 
* Click `IMAGES` on the left, in the sidebar navigation.
![cf getting started 10](https://github.com/welldone-software/cf-demo-micro-app/blob/master/gettings-started/images/cf-getting-started-10.png)
* Click on the rocket icon to launch your newly built image in a container.
![cf getting started 11](https://github.com/welldone-software/cf-demo-micro-app/blob/master/gettings-started/images/cf-getting-started-11.png)
* Click the `+` icons to see more information about the container launch.

*You will notice that the container has failed to build, because DemoChat is expecting an instance of MongoDB to be running.
* Click `COMPOSITIONS` on the left, in the sidebar navigation.
![cf getting started 12](https://github.com/welldone-software/cf-demo-micro-app/blob/master/gettings-started/images/cf-getting-started-12.png)
* Click `ADD NEW COMPOSITION`.
![cf getting started 13](https://github.com/welldone-software/cf-demo-micro-app/blob/master/gettings-started/images/cf-getting-started-13.png)
* Name the new composition `micro-app` by typing it into the `Name` box.
![cf getting started 14](https://github.com/welldone-software/cf-demo-micro-app/blob/master/gettings-started/images/cf-getting-started-14.png)
* Click the `+` icon to add a service to the composition.
![cf getting started 15](https://github.com/welldone-software/cf-demo-micro-app/blob/master/gettings-started/images/cf-getting-started-15.png)
* Select the `cf-demo-micro-app` service from the `Pre-configured service` option.
* Click `ADD`.
![cf getting started 16](https://github.com/welldone-software/cf-demo-micro-app/blob/master/gettings-started/images/cf-getting-started-16.png)

+ *Codefresh will add a basic configuration for `cf-demo-micro-app` to the composition.

**Configuration**:

    cf-welldone-demo_cf-demo-micro-app:
        image: cf-welldone-demo/cf-demo-micro-app:master
        ports:
            - 3000

* Click the `+` icon to add another service to the composition.
![cf getting started 17](https://github.com/welldone-software/cf-demo-micro-app/blob/master/gettings-started/images/cf-getting-started-17.png)
* Click `Pre-built image`.
* Type `mongo` into the field.
* Click `ADD`.
![cf getting started 18](https://github.com/welldone-software/cf-demo-micro-app/blob/master/gettings-started/images/cf-getting-started-18.png)

+ *Codefresh will add a basic configuration for `mongo` to the composition.

**Configuration**:

    cf-welldone-demo_cf-demo-micro-app:
        image: cf-welldone-demo/cf-demo-micro-app:master
        ports:
            - 3000
    mongo:
        image: mongo

* Click in the text of the composition to edit it.
* Change the `ports` value to `5000`.
* Add a `links` line with the value of `mongo` and add `environment` variables.

*Your composition will look like the one below:

**Configuration**:

    cf-welldone-demo_cf-demo-micro-app:
        image: cf-welldone-demo/cf-demo-micro-app:master
        ports:
            - 5000
        links:
            - mongo
        environment:
            MONGO_URL: mongo/cf-micro-api
            PORT: 5000
    mongo:
        image: mongo

![cf getting started 19](https://github.com/welldone-software/cf-demo-micro-app/blob/master/gettings-started/images/cf-getting-started-19.png)
* Click `SAVE`.
* Click the rocket icon to `LAUNCH` your composition.
![cf getting started 20](https://github.com/welldone-software/cf-demo-micro-app/blob/master/gettings-started/images/cf-getting-started-20.png)
* Click `+'s` to see the logs and if the launch succeeded.
* Click `Open App` and see your app running at the URL provided.
![cf getting started 25](https://github.com/welldone-software/cf-demo-micro-app/blob/master/gettings-started/images/cf-getting-started-25.png)

**Now, we will add a worker service.**

* [Fork (or clone+push) our sample worker repo](https://github.com/welldone-software/cf-demo-micro-worker) for the purposes of this demo, or use your own repository.
* From the Codefresh console, click the `SERVICES` option on the left.
* Click `ADD SERVICE`.
![cf getting started 26](https://github.com/welldone-software/cf-demo-micro-app/blob/master/gettings-started/images/cf-getting-started-26.png)
* Choose your existing or forked Repository from previous step, as well as your Branch, and then click `NEXT`.
![cf getting started 27](https://github.com/welldone-software/cf-demo-micro-app/blob/master/gettings-started/images/cf-getting-started-27.png)
* Choose the Dockerfile from the Repository under `YES, IN MY REPO`.
* Click `NEXT`.
![cf getting started 28](https://github.com/welldone-software/cf-demo-micro-app/blob/master/gettings-started/images/cf-getting-started-28.png)
* Review the results and click `Close & Build`.
![cf getting started 29](https://github.com/welldone-software/cf-demo-micro-app/blob/master/gettings-started/images/cf-getting-started-29.png)
![cf getting started 30](https://github.com/welldone-software/cf-demo-micro-app/blob/master/gettings-started/images/cf-getting-started-30.png)
* Click on `SERVICES` on the left, in the sidebar navigation.
* Click on the ![settings.sprocket](https://github.com/welldone-software/cf-demo-micro-app/blob/master/gettings-started/images/gear.png) for your new service.
![cf getting started 31](https://github.com/welldone-software/cf-demo-micro-app/blob/master/gettings-started/images/cf-getting-started-31.png)
* Make sure `IMAGE NAME` matches your docker hub username and repo path (e.g. docker_hub_user/repo)
![cf getting started 32](https://github.com/welldone-software/cf-demo-micro-app/blob/master/gettings-started/images/cf-getting-started-32.png)
* Click `Push to Docker Registry` and then click [Docker Hub](http://hub.docker.com/).
* Scroll down and click `SAVE`.
* Click `COMPOSITIONS` on the left, in the sidebar navigation.
![cf getting started 33](https://github.com/welldone-software/cf-demo-micro-app/blob/master/gettings-started/images/cf-getting-started-33.png)
* Click in the text of the composition to edit it.
* Click the `+` icon to add a service to the composition.
![cf getting started 34](https://github.com/welldone-software/cf-demo-micro-app/blob/master/gettings-started/images/cf-getting-started-34.png)
* Select the `cf-demo-micro-worker` service from the `Pre-configured service` option.
* Click `ADD`.
![cf getting started 35](https://github.com/welldone-software/cf-demo-micro-app/blob/master/gettings-started/images/cf-getting-started-35.png)
* Change the ports value to `5000`.
* Add a `links` line with the value of `mongo` and add `environment` variables.

*Your composition will look like the one below:

**Configuration**:

    cf-welldone-demo_cf-demo-micro-app:
        image: cf-welldone-demo/cf-demo-micro-app:master
        ports:
            - 5000
        links:
            - mongo
        environment:
            MONGO_URL: mongo/cf-micro-api
            PORT: 5000
    mongo:
        image: mongo
    cf-welldone-demo_cf-demo-micro-worker:
        image: cf-welldone-demo/cf-demo-micro-worker:master
        ports:
            - 5000
        links:
            - mongo
        environment:
            MONGO_URL: mongo/cf-micro-api
            PORT: 5000

![cf getting started 36](https://github.com/welldone-software/cf-demo-micro-app/blob/master/gettings-started/images/cf-getting-started-36.png)
* Click `SAVE`.
* Click the rocket icon to `LAUNCH` your composition.
![cf getting started 37](https://github.com/welldone-software/cf-demo-micro-app/blob/master/gettings-started/images/cf-getting-started-37.png)
* Click `+'s` to see the logs and if the launch succeeded.
* Click `Open App` and see your app running at the URL provided.
![cf getting started 38](https://github.com/welldone-software/cf-demo-micro-app/blob/master/gettings-started/images/cf-getting-started-38.png)
* Back in the Codefresh admin, click `ENVIRONMENTS`, in the sidebar navigation.
![cf getting started 39](https://github.com/welldone-software/cf-demo-micro-app/blob/master/gettings-started/images/cf-getting-started-39.png)
**+ From here, you can see all running Environments, and share the URLs with other stakeholders in your organization.**

