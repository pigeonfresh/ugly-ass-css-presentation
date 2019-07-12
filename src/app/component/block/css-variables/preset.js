/* eslint-disable max-len */
import { storiesOf } from 'storybook/utils/utils';

storiesOf('css-variables', require('./css-variables.hbs')).add(
  'default',
  'No description yet...',
  `<hbs>
			{{> block/css-variables @root}}
		</hbs>`,
  require('./data'),
);
