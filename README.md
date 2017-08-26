<div align="center">
  <a href="https://github.com/gert-janwille/Sir-Basil">
    <img width="250" heigth="250" src="https://raw.github.com/gert-janwille/Sir-Basil/master/docs/Sir-Basil.png">
  </a>
  <br/>
  <p>
    Sir Basil is a bartender robot controlled with a node.js webapp using Bluetooth. It has been designed to hold up to 6 bottles for making cocktails. Choose a cocktails, make your own or just one drink. Sir Basil is the automated bartender you always wanted.
</div>


![Python Version](https://img.shields.io/badge/python-2.7-blue.svg)
![License](https://img.shields.io/badge/license-GPL-blue.svg)



## Getting Started

Following instructions will get you to install Sir Basil and how to use it. See usage for notes on how to call it.

### Requirements

Following are the requirements for getting the most out of DOT:

 - OS X Although people have made DOT work on other Systems, Mac OS X is the officially supported distribution, all new features are primarily tested on this platform.

- [Homebrew](https://brew.sh) to download tor. (only needed when you don't have tor installed).

**Install Homebrew:**
```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

### Installation

To install the latest development version type the following commands:

```bash
git clone https://github.com/gert-janwille/dot.git # Download the latest revision
cd dot # Switch to tool's directory
sudo python setup.py install # Install any dependencies (Currently pexpect, future, youtube_dl, pubnub, tor)
```
Alternatively, you can download the latest stable version from the [Releases page](https://github.com/gert-janwille/dot/releases).

If you want to make a default ssh connection, add in the Dot/dot folder a new file called `settings.py` and set the values:

```python
KALI_SERVER = <HOSTNAME>
SSH_USER = <USERNAME>
SSH_PASS = <PASSWORD>
```

## Usage

Run the tool by typing `dot` or `python bin/dot` (from inside the tool's directory).

By running DOT without any options, it will start the DOT mainframe.
Use `dot -t <TASK>` to start a task immediately


<br/>

### Main Functions
These are all functions who can be use immediately or using the dot mainframe.

<br/>

## Built With

* [PlatfromIO](http://platformio.org/) - The Sir Basil main language
* [Node.js](https://nodejs.org/en/) - The main client language

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/gert-janwille/Sir-Basil/tags).

## Authors

* **Gert-Jan Wille** - *Initial work* - [gert-janwille](https://github.com/gert-janwille)

See also the list of [contributors](https://github.com/gert-janwille/Sir-Basil/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.txt](LICENSE.txt) file for details

## Acknowledgments

* Love for [PubNub](https://www.pubnub.com)
* Inspirated by [WifiPhisher](https://github.com/wifiphisher/wifiphisher)
