import adapter from '../index';
import integrationTests from 'kinsman/lib/__tests__/integrationTests';
import kinsman from 'kinsman/lib/example';

const orm = kinsman(adapter());

describe('Adapter Integration tests', () => {
    integrationTests(orm);
});