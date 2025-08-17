import {defineBackend} from '@aws-amplify/backend';
import {auth} from './auth/resource';
import {data} from './data/resource';
import {Tags} from 'aws-cdk-lib';

/**
 * @see https://docs.amplify.aws/react/build-a-backend/ to add storage, functions, and more
 */
const backend = defineBackend({
  data,
  auth
});

// Tags
const tags = Tags.of(backend.stack);

// Custom Tags
tags.add("Client", 'JarVonDigital-LLC')
tags.add("ProjectType", 'Web')
