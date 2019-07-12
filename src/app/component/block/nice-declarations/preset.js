/* eslint-disable max-len */
import { storiesOf } from 'storybook/utils/utils';

storiesOf('nice-declarations', require('./nice-declarations.hbs')).add(
  'default',
  'No description yet...',
  `<hbs>
			{{> block/nice-declarations @root}}
		</hbs>`,
  require('./data'),
);
