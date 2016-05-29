#!/usr/bin/env node

require('bixby').main(function(IoC) {
  IoC.use('crypto', require('bixby-crypto'));
});
