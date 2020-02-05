<?php
namespace Deployer;

require 'recipe/laravel.php';

// Project name
set('application', 'QueenBlog');

// Project repository
set('repository', 'git@github.com:johnGachihi/QueenBlog.git');

// [Optional] Allocate tty for git clone. Default value is false.
set('git_tty', true);

// Shared files/dirs between deploys
add('shared_files', []);
add('shared_dirs', []);

// Writable dirs by web server
add('writable_dirs', []);


// Hosts

host('unscripted-a-test.wolfteamalpha.ninja')
    ->user('deployer')
    ->identityFile('~/.ssh/deployerkey')
    ->set('deploy_path', '/var/www/unscripted-a-test.wolfteamalpha.ninja/QueenBlog');

// Tasks
task('artisan:optimize', function () {});

//task('build', function () {
//    run('cd {{release_path}} && build');
//});

///////////
task('build', ['npm-install', 'npm-build']);

desc('Install npm packages');
task('npm-install', 'npm install');

desc('Build npm');
task('npm-build', function () {
    run('cd {{release_path}} && npm run dev');
});

after('deploy:vendors', 'build');
///////////

// [Optional] if deploy fails automatically unlock.
after('deploy:failed', 'deploy:unlock');

// Migrate database before symlink new release.

/*before('deploy:symlink', 'artisan:migrate');

desc('Seed database');
task('artisan:seed', 'php artisan db:seed --class=BlogsTableSeeder');

after('artisan:migrate', 'artisan:seed');*/
