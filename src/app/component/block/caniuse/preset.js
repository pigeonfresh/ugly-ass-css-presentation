/* eslint-disable max-len */
import { storiesOf } from 'storybook/utils/utils';

storiesOf('caniuse', require('./caniuse.hbs')).add(
  'default',
  'No description yet...',
  `<hbs>
			{{> block/caniuse @root}}
		</hbs>`,
  require('./data'),
);
