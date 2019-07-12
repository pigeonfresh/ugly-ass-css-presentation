/* eslint-disable max-len */
import { storiesOf } from 'storybook/utils/utils';

storiesOf('current-color', require('./current-color.hbs')).add(
  'default',
  'No description yet...',
  `<hbs>
			{{> block/current-color @root}}
		</hbs>`,
  require('./data'),
);
