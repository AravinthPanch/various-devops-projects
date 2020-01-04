/**
 * Description:   Automatic creation and deployment of websites on araCloud
 * Author:        Aravinth Panch
 */

// includes
var plan = require('flightplan');
require('./create-server.js');
require('./create-website.js');
require('./deploy-website.js');
require('./create-redirect.js');

// server
plan.target('araCloud', {
  host: '138.197.186.147',
  username: 'root',
  privateKey: '/Users/aravinth/.ssh/id_rsa',
  agent: process.env.SSH_AUTH_SOCK,

  webhook_dir: '/var/www/webhook/',
  supervisor_dir: '/etc/supervisor/conf.d/',
  apache2_conf_dir: '/etc/apache2/sites-available/'
});

// websites

//////////////////////////
/// WWW.ARACREATE.COM ////
//////////////////////////
plan.target('aracreate.com', [{
    host: 'aracreate.com',
    username: 'root',
    privateKey: '/Users/aravinth/.ssh/id_rsa',
    agent: process.env.SSH_AUTH_SOCK,

    domain_name: 'aracreate.com',
    port_number: 80,
    git_repo: 'git@github.com:AravinthPanch/aracreate.com.git',
    git_branch: 'master',
    git_src_dir: '',
    webhook_dir: '/var/www/webhook/',
  }, {
    host: 'dev.aracreate.com',
    username: 'root',
    privateKey: '/Users/aravinth/.ssh/id_rsa',
    agent: process.env.SSH_AUTH_SOCK,

    domain_name: 'dev.aracreate.com',
    port_number: 80,
    git_repo: 'git@github.com:AravinthPanch/aracreate.com.git',
    git_branch: 'dev',
    git_src_dir: '',
    webhook_dir: '/var/www/webhook/',
  },
  {
    host: 'test.aracreate.com',
    username: 'root',
    privateKey: '/Users/aravinth/.ssh/id_rsa',
    agent: process.env.SSH_AUTH_SOCK,

    domain_name: 'test.aracreate.com',
    port_number: 80,
    git_repo: 'git@github.com:AravinthPanch/aracreate.com.git',
    git_branch: 'dev',
    git_src_dir: 'test/',
    webhook_dir: '/var/www/webhook/',
  }
]);


//////////////////////////
/// WWW.ARAVINTH.INFO ////
//////////////////////////
plan.target('aravinth.info', [{
    host: 'aravinth.info',
    username: 'root',
    privateKey: '/Users/aravinth/.ssh/id_rsa',
    agent: process.env.SSH_AUTH_SOCK,

    domain_name: 'aravinth.info',
    port_number: 80,
    git_repo: 'git@github.com:AravinthPanch/aravinth.info.git',
    git_branch: 'master',
    git_src_dir: 'src/index/',
    webhook_dir: '/var/www/webhook/',
  },
  {
    host: 'aravinth.info',
    username: 'root',
    privateKey: '/Users/aravinth/.ssh/id_rsa',
    agent: process.env.SSH_AUTH_SOCK,

    domain_name: 'timeline.aravinth.info',
    port_number: 80,
    git_repo: 'git@github.com:AravinthPanch/aravinth.info.git',
    git_branch: 'master',
    git_src_dir: 'src/timeline/',
    webhook_dir: '/var/www/webhook/',
  },
  {
    host: 'aravinth.info',
    username: 'root',
    privateKey: '/Users/aravinth/.ssh/id_rsa',
    agent: process.env.SSH_AUTH_SOCK,

    domain_name: 'arabot.aravinth.info',
    port_number: 80,
    git_repo: 'git@github.com:AravinthPanch/aravinth.info.git',
    git_branch: 'master',
    git_src_dir: 'src/arabot/',
    webhook_dir: '/var/www/webhook/',
  }
]);
plan.target('files.aravinth.info', {
  host: 'aravinth.info',
  username: 'root',
  privateKey: '/Users/aravinth/.ssh/id_rsa',
  agent: process.env.SSH_AUTH_SOCK,

  domain_name: 'files.aravinth.info',
  port_number: 80,
  git_repo: 'git@github.com:AravinthPanch/files.aravinth.info.git',
  git_branch: 'master',
  git_src_dir: '',
  webhook_dir: '/var/www/webhook/',
});
plan.target('cal.aravinth.info', {
  host: 'aravinth.info',
  username: 'root',
  privateKey: '/Users/aravinth/.ssh/id_rsa',
  agent: process.env.SSH_AUTH_SOCK,

  domain_name: 'cal.aravinth.info',
  port_number: 80,
  redirect_url: 'https://calendly.com/ara-panch',
});


///////////////////////////////
/// WWW.DREAMSPACE.ACADEMY ////
///////////////////////////////
plan.target('dreamspace.academy', [{
  host: 'dreamspace.academy',
  username: 'root',
  privateKey: '/Users/aravinth/.ssh/id_rsa',
  agent: process.env.SSH_AUTH_SOCK,

  domain_name: 'dreamspace.academy',
  port_number: 80,
  git_repo: 'git@github.com:dreamspace-academy/dreamspace.academy.git',
  git_branch: 'master',
  git_src_dir: '',
  webhook_dir: '/var/www/webhook/',
}, {
  host: 'dreamspace.academy',
  username: 'root',
  privateKey: '/Users/aravinth/.ssh/id_rsa',
  agent: process.env.SSH_AUTH_SOCK,

  domain_name: 'dev.dreamspace.academy',
  port_number: 80,
  git_repo: 'git@github.com:dreamspace-academy/dreamspace.academy.git',
  git_branch: 'dev',
  git_src_dir: '',
  webhook_dir: '/var/www/webhook/',
}]);

plan.target('team.dreamspace.academy', {
  host: 'dreamspace.academy',
  username: 'root',
  privateKey: '/Users/aravinth/.ssh/id_rsa',
  agent: process.env.SSH_AUTH_SOCK,

  domain_name: 'team.dreamspace.academy',
  port_number: 80,
  git_repo: 'git@github.com:dreamspace-academy/team.dreamspace.academy.git',
  git_branch: 'master',
  git_src_dir: '',
  webhook_dir: '/var/www/webhook/',
});

plan.target('terrace.dreamspace.academy', {
  host: 'dreamspace.academy',
  username: 'root',
  privateKey: '/Users/aravinth/.ssh/id_rsa',
  agent: process.env.SSH_AUTH_SOCK,

  domain_name: 'terrace.dreamspace.academy',
  port_number: 80,
  git_repo: 'git@github.com:dreamspace-academy/terrace.dreamspace.academy.git',
  git_branch: 'master',
  git_src_dir: '',
  webhook_dir: '/var/www/webhook/',
});

plan.target('admin.dreamspace.academy', {
  host: 'dreamspace.academy',
  username: 'root',
  privateKey: '/Users/aravinth/.ssh/id_rsa',
  agent: process.env.SSH_AUTH_SOCK,

  domain_name: 'admin.dreamspace.academy',
  port_number: 80,
  redirect_url: 'https://blog.dreamspace.academy/wp-admin/admin.php?page=sch-dashboard',
});


///////////////////////////
/// WWW.MACSXPERTS.COM ////
///////////////////////////
plan.target('macsxperts.com', [{
  host: 'macsxperts.com',
  username: 'root',
  privateKey: '/Users/aravinth/.ssh/id_rsa',
  agent: process.env.SSH_AUTH_SOCK,

  domain_name: 'macsxperts.com',
  port_number: 80,
  git_repo: 'git@github.com:AravinthPanch/macsxperts.com.git',
  git_branch: 'master',
  git_src_dir: '',
  webhook_dir: '/var/www/webhook/',
}]);


////////////////////////////////////
/// WWW.HARDWARESTARTUPS.BERLIN ////
////////////////////////////////////
plan.target('hardwarestartups.berlin', [{
  host: 'hardwarestartups.berlin',
  username: 'root',
  privateKey: '/Users/aravinth/.ssh/id_rsa',
  agent: process.env.SSH_AUTH_SOCK,

  domain_name: 'hardwarestartups.berlin',
  port_number: 80,
  git_repo: 'git@github.com:AravinthPanch/hardwarestartups.berlin.git',
  git_branch: 'master',
  git_src_dir: '',
  webhook_dir: '/var/www/webhook/',
}]);


/////////////////////////////
/// WWW.WATERGENICS.TECH ////
/////////////////////////////
plan.target('watergenics.tech', [{
    host: 'watergenics.tech',
    username: 'root',
    privateKey: '/Users/aravinth/.ssh/id_rsa',
    agent: process.env.SSH_AUTH_SOCK,

    domain_name: 'dev.watergenics.tech',
    port_number: 80,
    git_repo: 'git@github.com:AravinthPanch/watergenics.tech.git',
    git_branch: 'dev',
    git_src_dir: '',
    webhook_dir: '/var/www/webhook/',
  },
  {
    host: 'watergenics.tech',
    username: 'root',
    privateKey: '/Users/aravinth/.ssh/id_rsa',
    agent: process.env.SSH_AUTH_SOCK,

    domain_name: 'watergenics.tech',
    port_number: 80,
    git_repo: 'git@github.com:AravinthPanch/watergenics.tech.git',
    git_branch: 'master',
    git_src_dir: '',
    webhook_dir: '/var/www/webhook/',
  }
]);
