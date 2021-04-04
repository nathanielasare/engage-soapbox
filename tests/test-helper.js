import Application from 'engage-soapbox/app';
import config from 'engage-soapbox/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
