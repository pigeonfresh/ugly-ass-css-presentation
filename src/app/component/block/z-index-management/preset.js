/* eslint-disable max-len */
import { storiesOf } from 'storybook/utils/utils';

storiesOf('z-index-management', require('./z-index-management.hbs')).add(
  'default',
  'No description yet...',
  `<hbs>
			{{> block/z-index-management @root}}
		</hbs>`,
  require('./data'),
);
