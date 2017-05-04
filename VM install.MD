## Preparation

1. Downlaod the *CentOS 6.8 minimal* (CentOS-6.8-x86_64-minimal.iso) from  [http://mirrors.163.com/centos/6.8/isos/x86_64/][1]
2. Download the *Virtual Box* (Or other VM software) from [https://www.virtualbox.org/wiki/Downloads][2]
3. Download *Hudson 3.1.2* from [http://hudson-ci.org/downloads/redhat/hudson-3.1.2-1.1.noarch.rpm][3]

## Install VM software

- After install Virtual Box, open it
- Create a new system, choose Linux type (Other linux types)
- Use the default setting except the memory and disk size
- Set Memory to 6GB
- Set Disk to 40GB

## Install CentOS into VM
- Open the setting of Virtual Box
- Go to storage
- Select "Empty" in Controller:IDE
- Press the disk icon and choose the iso file(CentOS-6.8-x86_64-minimal.iso) to load it into VM
- Start the system
- Use default setting to continue until "Media Check"
- Select continue
- If error happens, redo the load iso file actions (Setting of Virtual Box)
- After load iso file again, select OK to continue
- Use default setting to continue until a storge waring shows up
- Select Yes
- Config the network when input local host name
- Check connect automatically checkbox, go to next step
- Select time zone
- Set password
- Use dafault(Replace existing Linux)
- When a waring shows up, select Write changes to disk
- Wait until asked to reboot
- After reboot,input "root" as the user name
- When asked to input password, input the one you just set
- Successfully login

*There is no GUI in CentOS minimal version, do not try to modify the inittab file*

## Configure the CentOS network for file transpoting
- Shutdown CentOS if it's opened
- Open the preferences of Virtual Box
- Go to Network
- Add a new Host-only network
- Start CentOS
- ip addr
- see the MAC address of eth1(after link/ether, "XX:XX:XX:XX:XX:XX")
- cp /etc/sysconfig/network-scripts/ifcfg-eth0 /etc/sysconfig/network-scripts/ifcfg-eth1
- vi /etc/sysconfig/network-scripts/ifcfg-eth1
- change HWADDR to the MAC address you saw
- change DEVICE and NAME to eth1
- change BOOTPROTO to static
- change UUID a few letter
- add 2 lines: 
    - IPADDR=192.168.56.2
    - NETMASK=255.255.255.0
- save the file and reboot

## Use ssh to transport files

- mkdir share
- Open terminal where the file is in Mac
- in mac: scp hudson-3.1.2-1.1.noarch.rpm root@192.168.56.2:~/share/
- in mac: Input password
- Back into CentOS: cd ~/share
- ls 
- The file should be shown here

## Install JDK

- yum list installed |grep java (see if jdk already installed)
- if installed
    - yum -y remove java-1.7.0-openjdk* (delete jdk)
    - yum -y remove tzdata-java.noarch (delete tzdata-java)
- if not installed
    - yum -y list java* (show all jdk files)
    - yum -y install java-1.8.0-openjdk* (install jdk related files)
    - Wait until "Complete!"is showed
    - java -version (see if java is successfully installed)


## Install Hudson in CentOS

- create a new dir for hudson location as dir-path used next step (/hudsonHome/hudson for example)
- cd ~/share
- yum localinstall hudson-3.1.2-1.1.noarch.rpm (install the rpm package)
    - after this step, hudson is installed in default location
- mv /var/lib/hudson /hudsonHome (move default dir to new dir)
- vi /etc/sysconfig/hudson
    - change HUDSON_HOME to /hudsonHome/hudson
    - change HUDSON_PORT to 3205
    - save and quit
- reboot
- /etc/init.d/iptables stop (stop the firewall)
- service hudson start (start hudson)
- in mac: open browser and go to 192.168.56.2:3205
- click install at bottom and wait it's done
- click finish
- create a job
- in CentOS: cd /hudsonHome/hudson/jobs
- ls (see if the job exists)


[1]: http://mirrors.163.com/centos/6.8/isos/x86_64/
[2]: https://www.virtualbox.org/wiki/Downloads
[3]: http://hudson-ci.org/downloads/redhat/hudson-3.1.2-1.1.noarch.rpm



