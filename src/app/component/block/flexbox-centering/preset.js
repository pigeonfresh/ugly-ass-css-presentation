/* eslint-disable max-len */
import { storiesOf } from 'storybook/utils/utils';

storiesOf('flexbox-centering', require('./flexbox-centering.hbs')).add(
  'default',
  'No description yet...',
  `<hbs>
			{{> block/flexbox-centering @root}}
		</hbs>`,
  require('./data'),
);
