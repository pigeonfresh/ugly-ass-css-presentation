/* eslint-disable max-len */
import { storiesOf } from 'storybook/utils/utils';

storiesOf('before-after', require('./before-after.hbs')).add(
  'default',
  'No description yet...',
  `<hbs>
			{{> block/before-after @root}}
		</hbs>`,
  require('./data'),
);
