<template>
  <b>Starting MOD...</b>
  <component :is="script" type="text/javascript">
    if (typeof (AndroidFunction) != 'undefined') { /* MOD단말일때 */
    localStorage.setItem('macaddress', AndroidFunction.MacAddress()); } else {z
    /* MOD단말이 아닐때 */ function virtualMac() { var guid = U.createGuid();
    var mac = '%0:%1:%2:%3:%4:%5'.format2(guid.substr(0, 2), guid.substr(2, 2),
    guid.substr(4, 2), guid.substr(6, 2), guid.substr(9, 2), guid.substr(11,
    2)); return mac; } var mac = localStorage.getItem('virtualMac'); if (!mac) {
    mac = virtualMac(); localStorage.setItem('virtualMac', mac); }
    localStorage.setItem('macaddress', localStorage.virtualMac); }
    setCookie('macaddress', localStorage.macaddress); var introurl =
    '/Main?mac=' + localStorage.macaddress; console.log(introurl); location.href
    = introurl;
  </component>
</template>

<script>
export default {
  name: "app",
  components: {},
};
</script>
