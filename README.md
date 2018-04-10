# Hyperledger Composer Starter
![enter image description here](https://blogselman.files.wordpress.com/2017/04/congablocks.png)

Model your **business network** and integrate existing systems and data with your blockchain applications. Supports **Hyperledger Fabric** blockchain infrastructure and runtime & pluggable blockchain consensus protocols to validate.

# Description Composer
Create Business Network Definition comprised of Model, Script, ACL, Query files => package this network to a .bna business network
archive (ready to deploy) => then use ID Cards (connection information) to deploy to a distributed ledger. A modeling language, and a set of APIs to quickly define and deploy business networks and applications that allow participants to send transactions that exchange assets.

## Key Concepts in Hyperledger Composer

- Blockchain State Storage
- Connection Profiles (business network cards)
- Assets (unique identifier)
- Participants
- Identitifiers
- Business network = combination of an identity, a connection profile, and metadata
- Transactions = Functions
- Queries = return data about the blockchain world-state (extract data from blockchain network using Hyperledger Composer API)
- Events = emitted by transaction processor functions (composer-client API)
- Access Control (who has access to what)
- Historian registry (records successful transactions as HistorianRecord)

## Architecture
Create "full-stack" blockchain solutions i.e. business logic that runs on the blockchain, REST APIs that expose the blockchain logic to web or mobile applications, as well as integrating the blockchain with existing enterprise systems of record.

Hyperledger Composer is composed of the following **high-level components:**

**Execution Runtimes** => Hyperledger Fabric v1.1. State is stored on the distributed ledger (browser-localstorage, web-playground)

**Connection Profiles** => For Hyperledger Fabric v1.1 runtime it will contain TCP/IP addresses and ports for the Fabric peers, as well as cryptographic certificates etc.

**JavaScript SDK** => is a set of Node.js APIs the enables developers to create applications to manage and interact with deployed business networks. - two npm modules – composer-client crud composer-admin – manage business networks.

**Command Line Interface** => deploy and managed business network definitions

**REST Server** => Open API (Swagger) REST API based on LoopBack technology and **LoopBack Connector**

**Playground Web User Interface**

**Yeoman** code generator => 

 - Angular web application
 - Node.js application
 - Skeleton business network
 - 
**VSCode and Atom editor plugins**

## Installing the development environment
**PRE-REQUISITES**
-   Docker Engine: Version 17.03 or higher
-   Docker-Compose: Version 1.8 or higher
-   Node: 8.9 or higher (note version 9 is not supported)
-   npm: v5.x
-   git: 2.9.x or higher
-   Python: 2.7.x
-   VSCode with Hyperledger Extension

**COMMANDS**

    curl -O https://hyperledger.github.io/composer/latest/prereqs-ubuntu.sh
    chmod u+x prereqs-ubuntu.sh


**NPM modules**

    npm install -g composer-cli
    npm install -g composer-rest-server
    npm install -g generator-hyperledger-composer
    npm install -g yo
    npm install -g composer-playground

**Install Hyperledger Fabric**

    mkdir ~/fabric-tools && cd ~/fabric-tools
    curl -O https://raw.githubusercontent.com/hyperledger/composer-tools/master/packages/fabric-dev-servers/fabric-dev-servers.tar.gz 
    tar -xvf fabric-dev-servers.tar.gz
    cd ~/fabric-tools
    ./downloadFabric.sh
  
  **connect to runtime using peerAdminCard, start and stop runtime anytime**
  

    cd ~/fabric-tools
    ./startFabric.sh
    ./createPeerAdminCard.sh
    ./stopFabric.sh

**run web app : composer-playground**

    http://localhost:8080/login

**destroy a previous setup**

    docker kill $(docker ps -q)
    docker rm $(docker ps -aq)
    docker rmi $(docker images dev-* -q)

## Development

***1. Business network structure***
the data model, transaction logic and access control rules for your blockchain solution. Yeoman generator to create a skeleton business network.

    yo hyperledger-composer:businessnetwork

  

>enter network name, author name and author email

> `Apache-2.0`  as the license

> namespace as org.acme.mynetwork

***2. Define business network***
Model file (models/.cto)
Javascript transaction logic (lib/logic.js)
Add access control (.acl)

***3. Generate a business network archive (deployable.bna)***

cd tutorial-network **(project directory)**
 

    composer archive create -t dir -n .

>generates tutorial-network@0.0.1.bna

***4. Deploy the business network***

> Required : instance of fabric, peeradmin identity, chaincode privileges

    composer network install --card PeerAdmin@hlfv1 --archiveFile tutorial-network@0.0.1.bna
    composer network start --networkName tutorial-network --networkVersion 0.0.1 --networkAdmin admin --networkAdminEnrollSecret adminpw --card PeerAdmin@hlfv1 --file networkadmin.card
    composer card import --file networkadmin.card
    composer network ping --card admin@tutorial-network
    
***5. Generating a REST server***

    composer-rest-server
    
***5. Generate an Application***

    yo hyperledger-composer:angular

>connect to running business network

> Enter business network card

>> Connect to an existing REST API

> Enter REST server address

> Enter server port

>Select **Namespaces are not used**

    npm start
