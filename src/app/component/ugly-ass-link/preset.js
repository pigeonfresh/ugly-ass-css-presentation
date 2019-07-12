/* eslint-disable max-len */
import { storiesOf } from 'storybook/utils/utils';

storiesOf('ugly-ass-link', require('./ugly-ass-link.hbs')).add(
  'default',
  'No description yet...',
  `<hbs>
			{{> ugly-ass-link @root}}
		</hbs>`,
  {},
);
