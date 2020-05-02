'use strict';

let sessionStorage, utils, document, $;

describe('khiledin-chat-utils', () => {

  beforeEach(() => {
    sessionStorage = {};
    utils = require('..');
  });

  test('funcao gen_id()', () => {
    expect(typeof utils.gen_id()).toBe('number');
  });

  test('funcao session(string, any) nula', () => {

    utils.set('sessionStorage', {
      getItem: () => {
        return null;
      }
    });

    expect(utils.session()).toEqual(null);

  });

  test('funcao session(string, any) string', () => {

    utils.set('sessionStorage', {
      getItem: () => {
        return "test";
      }
    });

    expect(utils.session('')).toEqual('test');

  });

  test('funcao session(string, any) setar valor', () => {

    utils.set('sessionStorage', {
      getItem: () => {
        return null;
      },
      setItem: (key, value) => {
        return {
          key,
          value
        };
      }
    });

    expect(utils.session('test', 'test')).toEqual(true);

  });

  test('funcao clear_input()', () => {

    const $ = () => {
      val: (key) => {}
    };

    utils.clear_input('test');

  });

  test('funcao user_on_exists()', () => {

    const response = utils.user_on_exists({
      nome: 'test'
    });

    expect(response({
      peoples_add: ['test']
    })).toEqual(true);

  });

  test('funcao to_scroll()', () => {

    utils.set('document', {
      querySelector: () => {
        return {
          scrollHeight: 100
        }
      }
    });

    const $ = () => {
      animate: (key) => {}
    };

    utils.to_scroll();

  });

  test('funcao get_user()', () => {

    const response = utils.get_user()({});

    expect(response.nome).toEqual('');

  });

  test('funcao get_horario()', () => {
    expect(utils.get_horario().includes(':')).toEqual(true);
  });

  test('funcao html_element()', () => {

    utils.set('document', {
      createElement: () => {
        return {
          innerHTML: '',
          firstChild: 'test'
        }
      }
    });

    expect(utils.html_element('')).toEqual(null)

  });

  test('funcao removerAcentos(string)', () => {
    expect(utils.removerAcentos('testé')).toBe('teste');
    expect(utils.removerAcentos('têsté')).toBe('teste');
  });

  test('funcao bot_write()', () => {

    utils.set('document', {
      querySelector: () => {
        return {};
      }
    });

    expect(utils.bot_write({
      innerHTML: ''
    }, ['ola'])).toEqual(undefined)

  });

});
