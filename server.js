#!/usr/bin/env node

require('bixby').main(function(IoC) {
  IoC.use('crypto', require('bixby-crypto'));
  IoC.use('crypto/ds', require('bixby-crypto-vault'));
  IoC.use('opt/vault', require('bixby-vault'));
});
