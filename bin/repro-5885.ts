#!/usr/bin/env node

import { App } from '@aws-cdk/core';
import { Repro5885 } from '../lib/repro-5885';

const app = new App();
new Repro5885(app, 'Repro5885');
