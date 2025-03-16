import re
import requests
import os
import html
from urllib.parse import parse_qs

txt='''COUNT=228&ADIF=&lt;app_qrzlog_logid:10&gt;1197763462
&lt;app_qrzlog_status:1&gt;N
&lt;band:2&gt;2m
&lt;band_rx:2&gt;2m
&lt;call:6&gt;HA5MNA
&lt;comment:14&gt;S17-es kor qso
&lt;cont:2&gt;EU
&lt;country:7&gt;Hungary
&lt;cqz:2&gt;15
&lt;distance:1&gt;9
&lt;dxcc:3&gt;239
&lt;email:16&gt;ha5mna@gmail.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:7&gt;144.525
&lt;freq_rx:7&gt;144.525
&lt;gridsquare:6&gt;JN97mk
&lt;lat:11&gt;N047 26.200
&lt;lon:11&gt;E019 02.400
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250221
&lt;mode:2&gt;FM
&lt;my_city:3&gt;�rd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;D�vid N�meth-cs�ka
&lt;name:13&gt;Ivan Bossanyi
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20241220
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:38&gt;Preferred: e.QSL.cc - HAMLOG.ru - LoTW
&lt;qso_date:8&gt;20241220
&lt;qso_date_off:8&gt;20241220
&lt;qth:8&gt;Budapest
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1210
&lt;time_on:4&gt;1210
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1197937554
&lt;app_qrzlog_status:1&gt;S
&lt;band:2&gt;2m
&lt;band_rx:2&gt;2m
&lt;call:6&gt;HA7CSU
&lt;comment:14&gt;s17-es kor qso
&lt;cont:2&gt;EU
&lt;country:7&gt;Hungary
&lt;cqz:2&gt;15
&lt;distance:2&gt;23
&lt;dxcc:3&gt;239
&lt;email:26&gt;skultetilaszlo67@gmail.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:7&gt;145.425
&lt;freq_rx:7&gt;145.425
&lt;gridsquare:6&gt;JN97ql
&lt;ituz:2&gt;28
&lt;lat:11&gt;N047 28.700
&lt;lon:11&gt;E019 22.400
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250221
&lt;mode:2&gt;FM
&lt;my_city:3&gt;�rd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;D�vid N�meth-cs�ka
&lt;name:15&gt;Skult�ti L�szl�
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20241220
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:10&gt;eQSL,Email
&lt;qso_date:8&gt;20241220
&lt;qso_date_off:8&gt;20241220
&lt;qth:5&gt;P�cel
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1905
&lt;time_on:4&gt;1905
&lt;tx_pwr:1&gt;5
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1197937649
&lt;app_qrzlog_status:1&gt;S
&lt;band:2&gt;2m
&lt;band_rx:2&gt;2m
&lt;call:6&gt;HA5AIL
&lt;comment:14&gt;s17-es kor qso
&lt;cont:2&gt;EU
&lt;country:7&gt;Hungary
&lt;cqz:2&gt;15
&lt;distance:2&gt;13
&lt;dxcc:3&gt;239
&lt;email:19&gt;damisch5a@yahoo.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:7&gt;145.425
&lt;freq_rx:7&gt;145.425
&lt;gridsquare:6&gt;JN97ol
&lt;ituz:2&gt;28
&lt;lat:11&gt;N047 28.685
&lt;lon:11&gt;E019 14.037
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250221
&lt;mode:2&gt;FM
&lt;my_city:3&gt;�rd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;D�vid N�meth-cs�ka
&lt;name:13&gt;Josef Damisch
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20241220
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20241220
&lt;qso_date_off:8&gt;20241220
&lt;qth:8&gt;Budapest
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1906
&lt;time_on:4&gt;1906
&lt;tx_pwr:1&gt;5
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1201787286
&lt;app_qrzlog_status:1&gt;N
&lt;band:4&gt;70cm
&lt;band_rx:4&gt;70cm
&lt;call:5&gt;HA6NN
&lt;comment:19&gt;hg5rug-on keresztul
&lt;cont:2&gt;EU
&lt;country:7&gt;Hungary
&lt;cqz:2&gt;15
&lt;distance:2&gt;85
&lt;dxcc:3&gt;239
&lt;email:15&gt;bato@starjan.hu
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:5&gt;431.6
&lt;freq_rx:5&gt;431.6
&lt;gridsquare:6&gt;JN98vc
&lt;ituz:2&gt;28
&lt;lat:11&gt;N048 06.074
&lt;lon:11&gt;E019 48.717
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250221
&lt;mode:2&gt;FM
&lt;my_city:3&gt;�rd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;D�vid N�meth-cs�ka
&lt;name:11&gt;Bat� Andr�s
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20241227
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:56&gt;QSL via LotW and eqsl.cc SWL reports to eqsl.cc, please!
&lt;qso_date:8&gt;20241227
&lt;qso_date_off:8&gt;20241227
&lt;qth:11&gt;Salgotarjan
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1054
&lt;time_on:4&gt;1054
&lt;tx_pwr:1&gt;5
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1203501079
&lt;app_qrzlog_qsldate:8&gt;20250221
&lt;app_qrzlog_status:1&gt;C
&lt;band:2&gt;2m
&lt;band_rx:2&gt;2m
&lt;call:6&gt;HA7LCA
&lt;comment:27&gt;Gerecse atjatszon keresztul
&lt;cont:2&gt;EU
&lt;country:7&gt;Hungary
&lt;cqz:2&gt;15
&lt;distance:2&gt;23
&lt;dxcc:3&gt;239
&lt;email:15&gt;ha7lca@breko.hu
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:7&gt;145.075
&lt;freq_rx:7&gt;145.075
&lt;gridsquare:6&gt;JN97mh
&lt;ituz:2&gt;28
&lt;lat:11&gt;N047 18.700
&lt;lon:11&gt;E019 02.400
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250221
&lt;mode:2&gt;FM
&lt;my_city:3&gt;�rd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;D�vid N�meth-cs�ka
&lt;name:16&gt;Barakonyi Balint
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20241230
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:4&gt;eQSL
&lt;qso_date:8&gt;20241230
&lt;qso_date_off:8&gt;20241230
&lt;qth:22&gt;2310 Szigetszentmiklos
&lt;rst_rcvd:1&gt;5
&lt;rst_sent:1&gt;5
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1130
&lt;time_on:4&gt;1130
&lt;tx_pwr:1&gt;5
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1205264673
&lt;app_qrzlog_status:1&gt;N
&lt;band:2&gt;2m
&lt;band_rx:2&gt;2m
&lt;call:6&gt;HG7ZSO
&lt;comment:19&gt;S16 altalanos hivas
&lt;cont:2&gt;EU
&lt;country:7&gt;Hungary
&lt;distance:2&gt;26
&lt;dxcc:3&gt;239
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:5&gt;145.4
&lt;freq_rx:5&gt;145.4
&lt;gridsquare:6&gt;JN97qj
&lt;lat:11&gt;N047 23.700
&lt;lon:11&gt;E019 22.400
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250221
&lt;mode:2&gt;FM
&lt;my_city:3&gt;�rd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;D�vid N�meth-cs�ka
&lt;name:12&gt;Zsoldi Zsolt
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250101
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250101
&lt;qso_date_off:8&gt;20250101
&lt;qth:17&gt;Széchenyi u. 15.
&lt;rst_rcvd:2&gt;34
&lt;rst_sent:2&gt;54
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1545
&lt;time_on:4&gt;1545
&lt;tx_pwr:1&gt;5
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1205295587
&lt;app_qrzlog_status:1&gt;N
&lt;band:2&gt;2m
&lt;band_rx:2&gt;2m
&lt;call:6&gt;HG5ONE
&lt;comment:43&gt;S16 altalanos hivas utan jott be masodiknak
&lt;cont:2&gt;EU
&lt;country:7&gt;Hungary
&lt;cqz:2&gt;15
&lt;dxcc:3&gt;239
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:5&gt;145.4
&lt;freq_rx:5&gt;145.4
&lt;ituz:2&gt;28
&lt;lat:11&gt;S000 00.000
&lt;lon:11&gt;W000 00.000
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250221
&lt;mode:2&gt;FM
&lt;my_city:3&gt;�rd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;D�vid N�meth-cs�ka
&lt;name:5&gt; Reka
&lt;notes:21&gt;s16-on, Levente parja
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250101
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250101
&lt;qso_date_off:8&gt;20250101
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;56
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1633
&lt;time_on:4&gt;1633
&lt;tx_pwr:1&gt;5
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1205924136
&lt;app_qrzlog_qsldate:8&gt;20250221
&lt;app_qrzlog_status:1&gt;C
&lt;band:4&gt;70cm
&lt;band_rx:4&gt;70cm
&lt;call:5&gt;HA5LA
&lt;comment:19&gt;hg5rug-on keresztul
&lt;cont:2&gt;EU
&lt;country:7&gt;Hungary
&lt;cqz:2&gt;15
&lt;distance:1&gt;2
&lt;dxcc:3&gt;239
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:5&gt;431.6
&lt;freq_rx:5&gt;431.6
&lt;gridsquare:6&gt;JN97mm
&lt;iota:4&gt;none
&lt;ituz:2&gt;28
&lt;lat:11&gt;N047 31.248
&lt;lon:11&gt;E019 02.520
&lt;lotw_qsl_rcvd:1&gt;Y
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslrdate:8&gt;20250221
&lt;lotw_qslsdate:8&gt;20250221
&lt;mode:2&gt;FM
&lt;my_city:3&gt;�rd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;D�vid N�meth-cs�ka
&lt;name:12&gt;Laszlo Ashin
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250102
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250102
&lt;qso_date_off:8&gt;20250102
&lt;qth:10&gt;Albertirsa
&lt;rst_rcvd:1&gt;5
&lt;rst_sent:1&gt;5
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1618
&lt;time_on:4&gt;1610
&lt;tx_pwr:1&gt;5
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1208910744
&lt;app_qrzlog_status:1&gt;2
&lt;band:2&gt;2m
&lt;band_rx:2&gt;2m
&lt;call:6&gt;HG6GOA
&lt;comment:58&gt;altalanos hivasra reagalt s16-on, kesobb mentunk at s17-re
&lt;cont:2&gt;EU
&lt;country:7&gt;Hungary
&lt;cqz:2&gt;15
&lt;distance:1&gt;3
&lt;dxcc:3&gt;239
&lt;email:16&gt;hg6goa@gmail.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:7&gt;145.425
&lt;freq_rx:7&gt;145.425
&lt;gridsquare:6&gt;JN97ml
&lt;ituz:2&gt;28
&lt;lat:11&gt;N047 29.590
&lt;lon:11&gt;E019 04.158
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250221
&lt;mode:2&gt;FM
&lt;my_city:3&gt;�rd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;D�vid N�meth-cs�ka
&lt;name:13&gt;Ferenc Czirok
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250106
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:6&gt;Direct
&lt;qso_date:8&gt;20250106
&lt;qso_date_off:8&gt;20250106
&lt;qth:8&gt;Budapest
&lt;rst_sent:2&gt;56
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1609
&lt;time_on:4&gt;1609
&lt;tx_pwr:1&gt;5
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1208923195
&lt;app_qrzlog_status:1&gt;N
&lt;band:2&gt;2m
&lt;band_rx:2&gt;2m
&lt;call:5&gt;HA5ZR
&lt;cont:2&gt;EU
&lt;country:7&gt;Hungary
&lt;cqz:2&gt;15
&lt;dxcc:3&gt;239
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:7&gt;145.425
&lt;freq_rx:7&gt;145.425
&lt;ituz:2&gt;28
&lt;lat:11&gt;S000 00.000
&lt;lon:11&gt;W000 00.000
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250221
&lt;mode:2&gt;FM
&lt;my_city:3&gt;�rd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;D�vid N�meth-cs�ka
&lt;name:7&gt; Sandor
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250106
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250106
&lt;qso_date_off:8&gt;20250106
&lt;qth:11&gt;Rakospalota
&lt;rst_sent:2&gt;45
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1636
&lt;time_on:4&gt;1636
&lt;tx_pwr:1&gt;5
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1224106574
&lt;app_qrzlog_status:1&gt;N
&lt;band:2&gt;2m
&lt;band_rx:2&gt;2m
&lt;call:5&gt;HA7TM
&lt;comment:24&gt;erdi atjatszon keresztul
&lt;cont:2&gt;EU
&lt;country:7&gt;Hungary
&lt;cqz:2&gt;15
&lt;distance:2&gt;18
&lt;dxcc:3&gt;239
&lt;email:14&gt;ha7tm@ha7tm.hu
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;145.65
&lt;freq_rx:6&gt;145.65
&lt;gridsquare:6&gt;JN97kk
&lt;ituz:2&gt;28
&lt;lat:11&gt;N047 25.005
&lt;lon:11&gt;E018 53.160
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250221
&lt;mode:2&gt;FM
&lt;my_city:3&gt;�rd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;D�vid N�meth-cs�ka
&lt;name:19&gt;Tibor (Tibi) Nemeth
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250203
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:28&gt;VIA BURO AND LOTW AND DIRECT
&lt;qso_date:8&gt;20250203
&lt;qso_date_off:8&gt;20250203
&lt;qth:3&gt;ERD
&lt;state:1&gt;H
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1150
&lt;time_on:4&gt;1150
&lt;tx_pwr:1&gt;5
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1225936919
&lt;app_qrzlog_status:1&gt;2
&lt;band:2&gt;2m
&lt;band_rx:2&gt;2m
&lt;call:6&gt;HA5AIL
&lt;comment:11&gt;s17 qso kor
&lt;cont:2&gt;EU
&lt;country:7&gt;Hungary
&lt;cqz:2&gt;15
&lt;distance:2&gt;13
&lt;dxcc:3&gt;239
&lt;email:19&gt;damisch5a@yahoo.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:7&gt;145.425
&lt;freq_rx:7&gt;145.425
&lt;gridsquare:6&gt;JN97ol
&lt;ituz:2&gt;28
&lt;lat:11&gt;N047 28.685
&lt;lon:11&gt;E019 14.037
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250221
&lt;mode:2&gt;FM
&lt;my_city:3&gt;�rd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;D�vid N�meth-cs�ka
&lt;name:13&gt;Josef Damisch
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250207
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250207
&lt;qso_date_off:8&gt;20250207
&lt;qth:8&gt;Budapest
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1801
&lt;time_on:4&gt;1801
&lt;tx_pwr:1&gt;5
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1225936948
&lt;app_qrzlog_status:1&gt;2
&lt;band:2&gt;2m
&lt;band_rx:2&gt;2m
&lt;call:6&gt;HA7CSU
&lt;comment:11&gt;s17 qso kor
&lt;cont:2&gt;EU
&lt;country:7&gt;Hungary
&lt;cqz:2&gt;15
&lt;distance:2&gt;23
&lt;dxcc:3&gt;239
&lt;email:26&gt;skultetilaszlo67@gmail.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:7&gt;145.425
&lt;freq_rx:7&gt;145.425
&lt;gridsquare:6&gt;JN97ql
&lt;ituz:2&gt;28
&lt;lat:11&gt;N047 28.700
&lt;lon:11&gt;E019 22.400
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250221
&lt;mode:2&gt;FM
&lt;my_city:3&gt;�rd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;D�vid N�meth-cs�ka
&lt;name:18&gt;LÁSZLÓ Skultéti
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250207
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:10&gt;eQSL,Email
&lt;qso_date:8&gt;20250207
&lt;qso_date_off:8&gt;20250207
&lt;qth:6&gt;Pécel
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1802
&lt;time_on:4&gt;1802
&lt;tx_pwr:1&gt;5
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1226337051
&lt;app_qrzlog_status:1&gt;S
&lt;band:2&gt;2m
&lt;band_rx:2&gt;2m
&lt;call:6&gt;HA7CSU
&lt;comment:10&gt;s17-es kor
&lt;cont:2&gt;EU
&lt;country:7&gt;Hungary
&lt;cqz:2&gt;15
&lt;distance:2&gt;23
&lt;dxcc:3&gt;239
&lt;email:26&gt;skultetilaszlo67@gmail.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:7&gt;145.425
&lt;freq_rx:7&gt;145.425
&lt;gridsquare:6&gt;JN97ql
&lt;ituz:2&gt;28
&lt;lat:11&gt;N047 28.700
&lt;lon:11&gt;E019 22.400
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250221
&lt;mode:2&gt;FM
&lt;my_city:3&gt;�rd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;D�vid N�meth-cs�ka
&lt;name:18&gt;LÁSZLÓ Skultéti
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250208
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:10&gt;eQSL,Email
&lt;qso_date:8&gt;20250208
&lt;qso_date_off:8&gt;20250208
&lt;qth:6&gt;Pécel
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1915
&lt;time_on:4&gt;1915
&lt;tx_pwr:1&gt;5
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1226337197
&lt;app_qrzlog_qsldate:8&gt;20250309
&lt;app_qrzlog_status:1&gt;C
&lt;band:2&gt;2m
&lt;band_rx:2&gt;2m
&lt;call:6&gt;HA5CDM
&lt;comment:10&gt;s17-es kor
&lt;cont:2&gt;EU
&lt;country:7&gt;Hungary
&lt;cqz:2&gt;15
&lt;distance:2&gt;18
&lt;dxcc:3&gt;239
&lt;email:25&gt;kisprumikfamily@gmail.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:7&gt;145.425
&lt;freq_rx:7&gt;145.425
&lt;gridsquare:6&gt;JN97MI
&lt;ituz:2&gt;28
&lt;lat:11&gt;N047 21.252
&lt;lon:11&gt;E019 02.520
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250221
&lt;mode:2&gt;FM
&lt;my_city:3&gt;�rd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;D�vid N�meth-cs�ka
&lt;name:16&gt;Attila Kisprumik
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250208
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:40&gt;PLEASE QSL CARD : E-QSL& DIRECT & BUERO.
&lt;qso_date:8&gt;20250208
&lt;qso_date_off:8&gt;20250208
&lt;qth:8&gt;Budapest
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1916
&lt;time_on:4&gt;1916
&lt;tx_pwr:1&gt;5
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1228883843
&lt;app_qrzlog_status:1&gt;2
&lt;band:3&gt;40m
&lt;band_rx:3&gt;40m
&lt;call:7&gt;DL2025W
&lt;cont:2&gt;EU
&lt;country:7&gt;Germany
&lt;cqz:2&gt;14
&lt;distance:3&gt;580
&lt;dxcc:3&gt;230
&lt;email:13&gt;DM5JBN@GMX.de
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:5&gt;7.106
&lt;freq_rx:5&gt;7.106
&lt;gridsquare:6&gt;JO60kt
&lt;ituz:2&gt;28
&lt;lat:11&gt;N050 48.700
&lt;lon:11&gt;E012 52.400
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250221
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;�rd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;D�vid N�meth-cs�ka
&lt;name:48&gt;European Capital of Culture (CoC) 2025 Chemnitz 
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250213
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:62&gt;Only digital! eQSL, LoTW, Clublog, DCL and (downloadable) dQSL
&lt;qso_date:8&gt;20250213
&lt;qso_date_off:8&gt;20250213
&lt;qth:49&gt;SES commemorates the title holder in 1999: Weimar
&lt;rst_rcvd:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1951
&lt;time_on:4&gt;1951
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1229042692
&lt;app_qrzlog_status:1&gt;N
&lt;band:3&gt;40m
&lt;band_rx:3&gt;40m
&lt;call:6&gt;IK8LVP
&lt;cont:2&gt;EU
&lt;country:5&gt;Italy
&lt;distance:3&gt;826
&lt;dxcc:3&gt;248
&lt;email:18&gt;gcarpino@libero.it
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:5&gt;7.161
&lt;freq_rx:5&gt;7.161
&lt;gridsquare:6&gt;JN70dw
&lt;lat:11&gt;N040 55.241
&lt;lon:11&gt;E014 17.971
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250221
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;�rd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;D�vid N�meth-cs�ka
&lt;name:15&gt;GIORGIO CARPINO
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250214
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:26&gt;FROM EQSL.CC no QSL direct
&lt;qso_date:8&gt;20250214
&lt;qso_date_off:8&gt;20250214
&lt;qth:21&gt;80021 AFRAGOLA NAPOLI
&lt;rst_rcvd:2&gt;58
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;0618
&lt;time_on:4&gt;0618
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1229046326
&lt;app_qrzlog_status:1&gt;2
&lt;band:3&gt;40m
&lt;band_rx:3&gt;40m
&lt;call:6&gt;IV3WTJ
&lt;cont:2&gt;EU
&lt;country:5&gt;Italy
&lt;cqz:1&gt;3
&lt;distance:3&gt;476
&lt;dxcc:3&gt;248
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:4&gt;7.17
&lt;freq_rx:4&gt;7.17
&lt;gridsquare:6&gt;JN66ne
&lt;ituz:1&gt;3
&lt;lat:11&gt;N046 11.200
&lt;lon:11&gt;E013 07.400
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250221
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;�rd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;D�vid N�meth-cs�ka
&lt;name:10&gt;ALBERTO A.
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250214
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250214
&lt;qso_date_off:8&gt;20250214
&lt;qth:5&gt;UDINE
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;0632
&lt;time_on:4&gt;0632
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1229047949
&lt;app_qrzlog_status:1&gt;N
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:5&gt;UT1IT
&lt;cont:2&gt;EU
&lt;country:7&gt;Ukraine
&lt;distance:3&gt;931
&lt;dxcc:3&gt;288
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;14.232
&lt;freq_rx:6&gt;14.232
&lt;gridsquare:6&gt;KN59rb
&lt;lat:11&gt;N049 03.750
&lt;lon:11&gt;E031 27.500
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250221
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;�rd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;D�vid N�meth-cs�ka
&lt;name:19&gt; Tereshenko Igor A.
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250214
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250214
&lt;qso_date_off:8&gt;20250214
&lt;qth:30&gt;Khartsyzsk, ul. Dovatora, 12-2
&lt;rst_rcvd:2&gt;57
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;0656
&lt;time_on:4&gt;0656
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1229048462
&lt;app_qrzlog_status:1&gt;2
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:5&gt;F4CJY
&lt;cont:2&gt;EU
&lt;country:6&gt;France
&lt;cqz:2&gt;14
&lt;distance:4&gt;1170
&lt;dxcc:3&gt;227
&lt;email:17&gt;arnaudbo1@free.fr
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;14.292
&lt;freq_rx:6&gt;14.292
&lt;gridsquare:6&gt;JN23lt
&lt;ituz:2&gt;27
&lt;lat:11&gt;N043 48.750
&lt;lon:11&gt;E004 57.480
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250221
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;�rd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;D�vid N�meth-cs�ka
&lt;name:14&gt;ARNAUD BOERSMA
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250214
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:16&gt;F4CJYMM TK/F4CJY
&lt;qso_date:8&gt;20250214
&lt;qso_date_off:8&gt;20250214
&lt;qth:8&gt;molleges
&lt;rst_rcvd:2&gt;55
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;0704
&lt;time_on:4&gt;0704
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1229063294
&lt;app_qrzlog_status:1&gt;N
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:7&gt;II0LOVE
&lt;cont:2&gt;EU
&lt;country:5&gt;Italy
&lt;cqz:2&gt;15
&lt;distance:3&gt;747
&lt;dxcc:3&gt;248
&lt;email:18&gt;ii0love@amadei.biz
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;14.204
&lt;freq_rx:6&gt;14.204
&lt;gridsquare:6&gt;JN62hn
&lt;ituz:2&gt;28
&lt;lat:11&gt;N042 33.446
&lt;lon:11&gt;E012 38.997
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250221
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;�rd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;D�vid N�meth-cs�ka
&lt;name:36&gt;SPECIAL CALL FOR SAINT VALENTINE DAY
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250214
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:9&gt;via IQ0TE
&lt;qso_date:8&gt;20250214
&lt;qso_date_off:8&gt;20250214
&lt;qth:5&gt;TERNI
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;59
&lt;state:2&gt;TR
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;0921
&lt;time_on:4&gt;0921
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1229081022
&lt;app_qrzlog_qsldate:8&gt;20250221
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:6&gt;IU4RTQ
&lt;cont:2&gt;EU
&lt;country:5&gt;Italy
&lt;cqz:2&gt;15
&lt;distance:3&gt;682
&lt;dxcc:3&gt;248
&lt;email:18&gt;zolliedm@gmail.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;14.222
&lt;freq_rx:6&gt;14.222
&lt;gridsquare:6&gt;JN54ql
&lt;ituz:2&gt;28
&lt;lat:11&gt;N044 29.266
&lt;lon:11&gt;E011 23.711
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250221
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;�rd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;D�vid N�meth-cs�ka
&lt;name:16&gt;CLAUDIO GIULIANI
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250214
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250214
&lt;qso_date_off:8&gt;20250214
&lt;qth:18&gt;40138 Bologna (BO)
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;0954
&lt;time_on:4&gt;0954
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1229155523
&lt;app_qrzlog_qsldate:8&gt;20250221
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;15m
&lt;band_rx:3&gt;15m
&lt;call:5&gt;G1SDK
&lt;cont:2&gt;EU
&lt;country:7&gt;England
&lt;cqz:2&gt;14
&lt;distance:4&gt;1374
&lt;dxcc:3&gt;223
&lt;email:17&gt;g1sdk@hotmail.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;21.227
&lt;freq_rx:6&gt;21.227
&lt;gridsquare:4&gt;JO01
&lt;ituz:1&gt;1
&lt;lat:11&gt;N051 30.000
&lt;lon:11&gt;E001 00.000
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250221
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;�rd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;D�vid N�meth-cs�ka
&lt;name:18&gt;Soderis Karpasitis
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250214
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250214
&lt;qso_date_off:8&gt;20250214
&lt;qth:9&gt;HODDESDON
&lt;rst_rcvd:2&gt;57
&lt;rst_sent:2&gt;57
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1228
&lt;time_on:4&gt;1228
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1229159362
&lt;app_qrzlog_status:1&gt;2
&lt;band:3&gt;10m
&lt;band_rx:3&gt;10m
&lt;call:6&gt;MM0JVB
&lt;cont:2&gt;EU
&lt;country:8&gt;Scotland
&lt;cqz:2&gt;14
&lt;distance:4&gt;1834
&lt;dxcc:3&gt;279
&lt;email:18&gt;mm3jvb@hotmail.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;28.555
&lt;freq_rx:6&gt;28.555
&lt;gridsquare:6&gt;IO75xw
&lt;ituz:2&gt;27
&lt;lat:11&gt;N055 56.364
&lt;lon:11&gt;W004 02.240
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250221
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;�rd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;D�vid N�meth-cs�ka
&lt;name:8&gt;Jim Bell
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250214
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250214
&lt;qso_date_off:8&gt;20250214
&lt;qth:28&gt;Cumbernauld Glasgow, G68 9HL
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1253
&lt;time_on:4&gt;1253
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1229184264
&lt;app_qrzlog_status:1&gt;N
&lt;band:3&gt;15m
&lt;band_rx:3&gt;15m
&lt;call:5&gt;R4CBN
&lt;cont:2&gt;EU
&lt;country:6&gt;Russia
&lt;cqz:2&gt;16
&lt;dxcc:2&gt;54
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;21.256
&lt;freq_rx:6&gt;21.256
&lt;ituz:2&gt;19
&lt;lat:11&gt;S000 00.000
&lt;lon:11&gt;W000 00.000
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250221
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;�rd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;D�vid N�meth-cs�ka
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250214
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250214
&lt;qso_date_off:8&gt;20250214
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1413
&lt;time_on:4&gt;1413
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1229185689
&lt;app_qrzlog_status:1&gt;N
&lt;band:3&gt;15m
&lt;band_rx:3&gt;15m
&lt;call:6&gt;RN3QGL
&lt;cont:2&gt;EU
&lt;country:6&gt;Russia
&lt;distance:4&gt;1563
&lt;dxcc:2&gt;54
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;21.191
&lt;freq_rx:6&gt;21.191
&lt;gridsquare:6&gt;KO85ss
&lt;lat:11&gt;N055 46.250
&lt;lon:11&gt;E037 32.500
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250221
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;�rd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;D�vid N�meth-cs�ka
&lt;name:21&gt;Nickolay M. Golevskoy
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250214
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250214
&lt;qso_date_off:8&gt;20250214
&lt;qth:34&gt;397600, Kalach, Voronezhskaya obl.
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1417
&lt;time_on:4&gt;1417
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1229299239
&lt;app_qrzlog_status:1&gt;2
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:6&gt;EA5CCY
&lt;cont:2&gt;EU
&lt;country:5&gt;Spain
&lt;cqz:2&gt;14
&lt;distance:4&gt;1951
&lt;dxcc:3&gt;281
&lt;email:16&gt;ea5ccy@gmail.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;14.185
&lt;freq_rx:6&gt;14.185
&lt;gridsquare:6&gt;IM97kx
&lt;ituz:2&gt;37
&lt;lat:11&gt;N037 59.467
&lt;lon:11&gt;W001 07.450
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250221
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;�rd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;D�vid N�meth-cs�ka
&lt;name:22&gt;PEDRO POVEDA MORENILLA
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250214
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:20&gt;VIA BUREAU OR DIRECT
&lt;qso_date:8&gt;20250214
&lt;qso_date_off:8&gt;20250214
&lt;qth:6&gt;MURCIA
&lt;rst_rcvd:2&gt;58
&lt;rst_sent:2&gt;57
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1803
&lt;time_on:4&gt;1803
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1229348349
&lt;app_qrzlog_qsldate:8&gt;20250221
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:5&gt;EA3KE
&lt;cont:2&gt;EU
&lt;country:5&gt;Spain
&lt;cqz:2&gt;14
&lt;distance:4&gt;1643
&lt;dxcc:3&gt;281
&lt;email:20&gt;necktoni@hotmail.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:5&gt;14.25
&lt;freq_rx:5&gt;14.25
&lt;gridsquare:6&gt;JN00ir
&lt;ituz:2&gt;37
&lt;lat:11&gt;N040 43.094
&lt;lon:11&gt;E000 43.566
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250221
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;�rd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;D�vid N�meth-cs�ka
&lt;name:16&gt;Toni Olmo Tomàs
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250214
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:16&gt;BUREAU OR DIRECT
&lt;qso_date:8&gt;20250214
&lt;qso_date_off:8&gt;20250214
&lt;qth:20&gt;Deltebre (Tarragona)
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1814
&lt;time_on:4&gt;1814
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1229624189
&lt;app_qrzlog_qsldate:8&gt;20250221
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;15m
&lt;band_rx:3&gt;15m
&lt;call:6&gt;BG0EBX
&lt;cont:2&gt;AS
&lt;country:5&gt;China
&lt;cqz:2&gt;23
&lt;distance:4&gt;4889
&lt;dxcc:3&gt;318
&lt;email:14&gt;BG0EBX@163.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;21.249
&lt;freq_rx:6&gt;21.249
&lt;gridsquare:6&gt;NN25LN
&lt;ituz:2&gt;42
&lt;lat:11&gt;N045 33.750
&lt;lon:11&gt;E084 57.480
&lt;lotw_qsl_rcvd:1&gt;Y
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslrdate:8&gt;20250221
&lt;lotw_qslsdate:8&gt;20250221
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;�rd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;D�vid N�meth-cs�ka
&lt;name:12&gt;Chunyang Liu
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250215
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:35&gt;LOTW and QRZ only.No BURO and EQSL.
&lt;qso_date:8&gt;20250215
&lt;qso_date_off:8&gt;20250215
&lt;qth:46&gt;Karamay City, Xinjiang Uygur Autonomous Region
&lt;rst_rcvd:2&gt;56
&lt;rst_sent:2&gt;58
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1220
&lt;time_on:4&gt;1220
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1229630181
&lt;app_qrzlog_qsldate:8&gt;20250221
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:6&gt;TA2CLT
&lt;cont:2&gt;AS
&lt;country:6&gt;Turkey
&lt;cqz:2&gt;20
&lt;distance:4&gt;1081
&lt;dxcc:3&gt;390
&lt;email:24&gt;cemile_agaya@hotmail.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:5&gt;14.33
&lt;freq_rx:5&gt;14.33
&lt;gridsquare:6&gt;KN40nx
&lt;ituz:2&gt;39
&lt;lat:11&gt;N040 58.863
&lt;lon:11&gt;E029 08.737
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250221
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;�rd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;D�vid N�meth-cs�ka
&lt;name:13&gt;Cemile Ağaya
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250215
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250215
&lt;qso_date_off:8&gt;20250215
&lt;qth:9&gt;Ataşehir
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1245
&lt;time_on:4&gt;1245
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1229637695
&lt;app_qrzlog_qsldate:8&gt;20250221
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:6&gt;SP4VIT
&lt;cont:2&gt;EU
&lt;country:6&gt;Poland
&lt;cqz:2&gt;15
&lt;distance:3&gt;689
&lt;dxcc:3&gt;269
&lt;email:16&gt;wopara@gmail.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:4&gt;14.3
&lt;freq_rx:4&gt;14.3
&lt;gridsquare:8&gt;JO93XQ55
&lt;ituz:2&gt;28
&lt;lat:11&gt;N053 41.375
&lt;lon:11&gt;E019 57.750
&lt;lotw_qsl_rcvd:1&gt;Y
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslrdate:8&gt;20250221
&lt;lotw_qslsdate:8&gt;20250221
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;�rd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;D�vid N�meth-cs�ka
&lt;name:12&gt;Wiktor Opara
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250215
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250215
&lt;qso_date_off:8&gt;20250215
&lt;qth:8&gt;Ostróda
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1314
&lt;time_on:4&gt;1314
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1229641602
&lt;app_qrzlog_qsldate:8&gt;20250221
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:6&gt;IU4RTQ
&lt;cont:2&gt;EU
&lt;country:5&gt;Italy
&lt;cqz:2&gt;15
&lt;distance:3&gt;682
&lt;dxcc:3&gt;248
&lt;email:18&gt;zolliedm@gmail.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;14.256
&lt;freq_rx:6&gt;14.256
&lt;gridsquare:6&gt;JN54ql
&lt;ituz:2&gt;28
&lt;lat:11&gt;N044 29.266
&lt;lon:11&gt;E011 23.711
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250221
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;�rd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;D�vid N�meth-cs�ka
&lt;name:16&gt;CLAUDIO GIULIANI
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250215
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250215
&lt;qso_date_off:8&gt;20250215
&lt;qth:18&gt;40138 Bologna (BO)
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1322
&lt;time_on:4&gt;1322
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1229672164
&lt;app_qrzlog_status:1&gt;2
&lt;band:3&gt;15m
&lt;band_rx:3&gt;15m
&lt;call:5&gt;4L6DL
&lt;cont:2&gt;AS
&lt;country:7&gt;Georgia
&lt;cqz:2&gt;21
&lt;distance:4&gt;2131
&lt;dxcc:2&gt;75
&lt;email:22&gt;armenatomyan@gmail.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;21.235
&lt;freq_rx:6&gt;21.235
&lt;gridsquare:6&gt;LN21kr
&lt;ituz:2&gt;29
&lt;lat:11&gt;N041 42.636
&lt;lon:11&gt;E044 52.598
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250221
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;�rd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;D�vid N�meth-cs�ka
&lt;name:13&gt;Armen Atomyan
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250215
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:5&gt;LZ1OT
&lt;qso_date:8&gt;20250215
&lt;qso_date_off:8&gt;20250215
&lt;qth:7&gt;Tbilisi
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1351
&lt;time_on:4&gt;1351
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1229680428
&lt;app_qrzlog_status:1&gt;2
&lt;band:3&gt;15m
&lt;band_rx:3&gt;15m
&lt;call:6&gt;SM0ITQ
&lt;cont:2&gt;EU
&lt;country:6&gt;Sweden
&lt;cqz:2&gt;14
&lt;distance:4&gt;1347
&lt;dxcc:3&gt;284
&lt;email:16&gt;kjellq@gmail.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;21.243
&lt;freq_rx:6&gt;21.243
&lt;gridsquare:6&gt;JO99ao
&lt;ituz:1&gt;1
&lt;lat:11&gt;N059 37.197
&lt;lon:11&gt;E018 02.137
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250221
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;�rd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;D�vid N�meth-cs�ka
&lt;name:16&gt;KJELL QVARNSTROM
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250215
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250215
&lt;qso_date_off:8&gt;20250215
&lt;qth:19&gt;VALLENTUNA S-186 93
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;49
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1422
&lt;time_on:4&gt;1422
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1229686032
&lt;app_qrzlog_qsldate:8&gt;20250221
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;15m
&lt;band_rx:3&gt;15m
&lt;call:5&gt;LB0OJ
&lt;cont:2&gt;EU
&lt;country:6&gt;Norway
&lt;cqz:2&gt;14
&lt;distance:4&gt;1583
&lt;dxcc:3&gt;266
&lt;email:21&gt;bratelien61@gmail.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;21.262
&lt;freq_rx:6&gt;21.262
&lt;gridsquare:6&gt;JP50gv
&lt;iota:4&gt;none
&lt;ituz:2&gt;18
&lt;lat:11&gt;N060 53.416
&lt;lon:11&gt;E010 34.272
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250221
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;�rd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;D�vid N�meth-cs�ka
&lt;name:21&gt;Tor Helge Hesjadalen 
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250215
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:4&gt;NRRL
&lt;qso_date:8&gt;20250215
&lt;qso_date_off:8&gt;20250215
&lt;qth:18&gt;N2838 Snertingdal 
&lt;rst_rcvd:2&gt;52
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1445
&lt;time_on:4&gt;1445
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1229698222
&lt;app_qrzlog_qsldate:8&gt;20250221
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;10m
&lt;band_rx:3&gt;10m
&lt;call:5&gt;4X6HU
&lt;cont:2&gt;AS
&lt;country:6&gt;Israel
&lt;cqz:2&gt;20
&lt;distance:4&gt;2175
&lt;dxcc:3&gt;336
&lt;email:17&gt;4x6hu73@gmail.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;28.523
&lt;freq_rx:6&gt;28.523
&lt;gridsquare:8&gt;KM72JA02
&lt;ituz:2&gt;39
&lt;lat:11&gt;N032 00.519
&lt;lon:11&gt;E034 45.052
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250221
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;�rd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;D�vid N�meth-cs�ka
&lt;name:15&gt;RAMI SZTERNFELD
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250215
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:4&gt;rami
&lt;qso_date:8&gt;20250215
&lt;qso_date_off:8&gt;20250215
&lt;qth:7&gt;BAT-YAM
&lt;rst_rcvd:2&gt;52
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1530
&lt;time_on:4&gt;1530
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1229713347
&lt;app_qrzlog_qsldate:8&gt;20250221
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;15m
&lt;band_rx:3&gt;15m
&lt;call:6&gt;5B4AQX
&lt;cont:2&gt;AS
&lt;country:6&gt;Cyprus
&lt;cqz:2&gt;20
&lt;distance:4&gt;1831
&lt;dxcc:3&gt;215
&lt;email:16&gt;5b4aqx@gmail.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:5&gt;21.31
&lt;freq_rx:5&gt;21.31
&lt;gridsquare:6&gt;KM64kq
&lt;ituz:2&gt;39
&lt;lat:11&gt;N034 41.200
&lt;lon:11&gt;E032 52.400
&lt;lotw_qsl_rcvd:1&gt;Y
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslrdate:8&gt;20250221
&lt;lotw_qslsdate:8&gt;20250221
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;�rd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;D�vid N�meth-cs�ka
&lt;name:23&gt;Kimonas Nikolaos Milert
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250215
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250215
&lt;qso_date_off:8&gt;20250215
&lt;qth:18&gt;Episkopi, Limassol
&lt;rst_rcvd:2&gt;53
&lt;rst_sent:2&gt;57
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1555
&lt;time_on:4&gt;1555
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1230247017
&lt;app_qrzlog_status:1&gt;N
&lt;band:3&gt;15m
&lt;band_rx:3&gt;15m
&lt;call:5&gt;M0SHF
&lt;comment:84&gt;had a nice chat, but the signal dropped at the end, and we couldnt disuss everything
&lt;cont:2&gt;EU
&lt;country:7&gt;England
&lt;distance:4&gt;1442
&lt;dxcc:3&gt;223
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;21.299
&lt;freq_rx:6&gt;21.299
&lt;gridsquare:6&gt;JO01bv
&lt;lat:11&gt;N051 52.602
&lt;lon:11&gt;E000 07.111
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250221
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;�rd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;D�vid N�meth-cs�ka
&lt;name:7&gt;Neil N.
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250216
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:6&gt;NO QSL
&lt;qso_date:8&gt;20250216
&lt;qso_date_off:8&gt;20250216
&lt;qth:13&gt;Hertfordshire
&lt;rst_rcvd:2&gt;57
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1051
&lt;time_on:4&gt;1051
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1230275092
&lt;app_qrzlog_qsldate:8&gt;20250226
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;15m
&lt;band_rx:3&gt;15m
&lt;call:6&gt;LA2UJA
&lt;cont:2&gt;EU
&lt;country:6&gt;Norway
&lt;cqz:2&gt;14
&lt;distance:4&gt;1595
&lt;dxcc:3&gt;266
&lt;email:23&gt;ketil.olsen@haugnett.no
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;21.295
&lt;freq_rx:6&gt;21.295
&lt;gridsquare:8&gt;JO29QJ44
&lt;ituz:2&gt;14
&lt;lat:11&gt;N059 23.542
&lt;lon:11&gt;E005 22.365
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250226
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;�rd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;D�vid N�meth-cs�ka
&lt;name:11&gt;Ketil Olsen
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250216
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250216
&lt;qso_date_off:8&gt;20250216
&lt;qth:20&gt;5541 Kolnes ( Eike )
&lt;rst_rcvd:2&gt;57
&lt;rst_sent:2&gt;58
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1232
&lt;time_on:4&gt;1232
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1230398418
&lt;app_qrzlog_status:1&gt;N
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:7&gt;LZ403ES
&lt;cont:2&gt;EU
&lt;country:8&gt;Bulgaria
&lt;cqz:2&gt;20
&lt;distance:3&gt;675
&lt;dxcc:3&gt;212
&lt;email:12&gt;lz3ga@abv.bg
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:5&gt;14.22
&lt;freq_rx:5&gt;14.22
&lt;gridsquare:6&gt;KN22dq
&lt;ituz:2&gt;28
&lt;lat:11&gt;N042 41.250
&lt;lon:11&gt;E024 17.500
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250226
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;�rd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;D�vid N�meth-cs�ka
&lt;name:27&gt;Bulgarian Club Blagovestnik
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250216
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:24&gt;via Bureau or P.O.Box 36
&lt;qso_date:8&gt;20250216
&lt;qso_date_off:8&gt;20250216
&lt;qth:7&gt;Karlovo
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1749
&lt;time_on:4&gt;1749
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1230413584
&lt;app_qrzlog_status:1&gt;S
&lt;band:3&gt;40m
&lt;band_rx:3&gt;40m
&lt;call:5&gt;SP8QC
&lt;cont:2&gt;EU
&lt;country:6&gt;Poland
&lt;cqz:2&gt;15
&lt;distance:3&gt;394
&lt;dxcc:3&gt;269
&lt;email:20&gt;sp8qc.andy@gmail.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:5&gt;7.153
&lt;freq_rx:5&gt;7.153
&lt;gridsquare:6&gt;KO00xm
&lt;ituz:2&gt;28
&lt;lat:11&gt;N050 30.070
&lt;lon:11&gt;E021 59.677
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250226
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;�rd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;D�vid N�meth-cs�ka
&lt;name:18&gt;ANDY Andrzej JUREK
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250216
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:25&gt;VIA BUREAU OT-18; EQSL.CC
&lt;qso_date:8&gt;20250216
&lt;qso_date_off:8&gt;20250216
&lt;qth:5&gt;NISKO
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1814
&lt;time_on:4&gt;1814
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1230413670
&lt;app_qrzlog_status:1&gt;2
&lt;band:3&gt;40m
&lt;band_rx:3&gt;40m
&lt;call:6&gt;SP8ULA
&lt;cont:2&gt;EU
&lt;country:6&gt;Poland
&lt;cqz:2&gt;15
&lt;distance:3&gt;468
&lt;dxcc:3&gt;269
&lt;email:12&gt;sp8ula@wp.pl
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:5&gt;7.153
&lt;freq_rx:5&gt;7.153
&lt;gridsquare:6&gt;KO10pr
&lt;ituz:2&gt;28
&lt;lat:11&gt;N050 43.393
&lt;lon:11&gt;E023 15.118
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250226
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;�rd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;D�vid N�meth-cs�ka
&lt;name:24&gt;Urszula A RORBACH-HARVEY
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250216
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:5&gt;LoTW,
&lt;qso_date:8&gt;20250216
&lt;qso_date_off:8&gt;20250216
&lt;qth:8&gt;ZAMOŚĆ
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1815
&lt;time_on:4&gt;1815
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1230431628
&lt;app_qrzlog_qsldate:8&gt;20250226
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:5&gt;M0GLV
&lt;cont:2&gt;EU
&lt;country:7&gt;England
&lt;cqz:2&gt;14
&lt;distance:4&gt;1526
&lt;dxcc:3&gt;223
&lt;email:14&gt;sp4bhd@tlen.pl
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;14.217
&lt;freq_rx:6&gt;14.217
&lt;gridsquare:6&gt;IO93us
&lt;ituz:2&gt;27
&lt;lat:11&gt;N053 46.248
&lt;lon:11&gt;W000 17.520
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250226
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;�rd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;D�vid N�meth-cs�ka
&lt;name:12&gt;Marcin Jusko
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250216
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:14&gt;QSL VIA DIRECT
&lt;qso_date:8&gt;20250216
&lt;qso_date_off:8&gt;20250216
&lt;qth:18&gt;Kingston Upon Hull
&lt;rst_rcvd:2&gt;56
&lt;rst_sent:2&gt;58
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1833
&lt;time_on:4&gt;1833
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1230743297
&lt;app_qrzlog_qsldate:8&gt;20250226
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;40m
&lt;band_rx:3&gt;40m
&lt;call:6&gt;IV3WTJ
&lt;cont:2&gt;EU
&lt;country:5&gt;Italy
&lt;cqz:1&gt;3
&lt;distance:3&gt;476
&lt;dxcc:3&gt;248
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:5&gt;7.189
&lt;freq_rx:5&gt;7.189
&lt;gridsquare:6&gt;JN66ne
&lt;ituz:1&gt;3
&lt;lat:11&gt;N046 11.200
&lt;lon:11&gt;E013 07.400
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250226
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;�rd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;D�vid N�meth-cs�ka
&lt;name:10&gt;ALBERTO A.
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250217
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250217
&lt;qso_date_off:8&gt;20250217
&lt;qth:5&gt;UDINE
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;0625
&lt;time_on:4&gt;0625
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1230746701
&lt;app_qrzlog_status:1&gt;N
&lt;band:3&gt;40m
&lt;band_rx:3&gt;40m
&lt;call:5&gt;Z60ID
&lt;cont:2&gt;EU
&lt;country:18&gt;Republic of Kosovo
&lt;dxcc:3&gt;522
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:4&gt;7.13
&lt;freq_rx:4&gt;7.13
&lt;lat:11&gt;S000 00.000
&lt;lon:11&gt;W000 00.000
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250226
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;�rd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;D�vid N�meth-cs�ka
&lt;name:46&gt;Kosovo Independence Day .Special event station
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250217
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250217
&lt;qso_date_off:8&gt;20250217
&lt;qth:9&gt;Prishtina
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;0650
&lt;time_on:4&gt;0650
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1230815475
&lt;app_qrzlog_status:1&gt;2
&lt;band:3&gt;15m
&lt;band_rx:3&gt;15m
&lt;call:5&gt;G0OVK
&lt;cont:2&gt;EU
&lt;country:7&gt;England
&lt;cqz:2&gt;14
&lt;distance:4&gt;1454
&lt;dxcc:3&gt;223
&lt;email:16&gt;mr2gt@live.co.uk
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:5&gt;21.26
&lt;freq_rx:5&gt;21.26
&lt;gridsquare:6&gt;IO91vl
&lt;ituz:2&gt;27
&lt;lat:11&gt;N051 29.704
&lt;lon:11&gt;W000 10.547
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250226
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;�rd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;D�vid N�meth-cs�ka
&lt;name:11&gt;RTJ MANSELL
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250217
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250217
&lt;qso_date_off:8&gt;20250217
&lt;qth:10&gt;WILLENHALL
&lt;rst_rcvd:2&gt;56
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1159
&lt;time_on:4&gt;1159
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1230981808
&lt;app_qrzlog_qsldate:8&gt;20250226
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;40m
&lt;band_rx:3&gt;40m
&lt;call:5&gt;DK8WG
&lt;cont:2&gt;EU
&lt;country:7&gt;Germany
&lt;cqz:2&gt;14
&lt;distance:3&gt;779
&lt;dxcc:3&gt;230
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:5&gt;7.166
&lt;freq_rx:5&gt;7.166
&lt;gridsquare:6&gt;JO40tt
&lt;ituz:2&gt;28
&lt;lat:11&gt;N050 48.441
&lt;lon:11&gt;E009 36.071
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250226
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;�rd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;D�vid N�meth-cs�ka
&lt;name:17&gt;Claus-Dieter Kopp
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250217
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:20&gt;VIA BUREAU OR DIRECT
&lt;qso_date:8&gt;20250217
&lt;qso_date_off:8&gt;20250217
&lt;qth:16&gt;36272 Niederaula
&lt;rst_rcvd:2&gt;57
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1753
&lt;time_on:4&gt;1753
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1231005581
&lt;app_qrzlog_qsldate:8&gt;20250226
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;40m
&lt;band_rx:3&gt;40m
&lt;call:5&gt;DL0AH
&lt;cont:2&gt;EU
&lt;country:7&gt;Germany
&lt;cqz:2&gt;14
&lt;distance:3&gt;848
&lt;dxcc:3&gt;230
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:5&gt;7.179
&lt;freq_rx:5&gt;7.179
&lt;gridsquare:6&gt;JO41lj
&lt;ituz:2&gt;28
&lt;lat:11&gt;N051 23.700
&lt;lon:11&gt;E008 57.400
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250226
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;�rd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;D�vid N�meth-cs�ka
&lt;name:12&gt;Club Station
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250217
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:23&gt;Bureau / eQSL / DOK F01
&lt;qso_date:8&gt;20250217
&lt;qso_date_off:8&gt;20250217
&lt;qth:33&gt;OV Bad Arolsen (30km West Kassel)
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1839
&lt;time_on:4&gt;1839
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1231407139
&lt;app_qrzlog_qsldate:8&gt;20250306
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;40m
&lt;band_rx:3&gt;40m
&lt;call:9&gt;SP100IARU
&lt;cont:2&gt;EU
&lt;country:6&gt;Poland
&lt;distance:3&gt;547
&lt;dxcc:3&gt;269
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:5&gt;7.179
&lt;freq_rx:5&gt;7.179
&lt;gridsquare:6&gt;KO02mg
&lt;lat:11&gt;N052 16.250
&lt;lon:11&gt;E021 02.500
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250226
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;�rd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;D�vid N�meth-cs�ka
&lt;name:59&gt;The 95th anniversary of the PZK and centennial of the IARU 
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250218
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250218
&lt;qso_date_off:8&gt;20250218
&lt;qth:6&gt;Warsaw
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1640
&lt;time_on:4&gt;1640
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1231408943
&lt;app_qrzlog_status:1&gt;2
&lt;band:3&gt;40m
&lt;band_rx:3&gt;40m
&lt;call:6&gt;YU3FMS
&lt;cont:2&gt;EU
&lt;country:6&gt;Serbia
&lt;cqz:2&gt;15
&lt;distance:3&gt;308
&lt;dxcc:3&gt;296
&lt;email:15&gt;filip@yu3fms.rs
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:5&gt;7.163
&lt;freq_rx:5&gt;7.163
&lt;gridsquare:6&gt;JN95VA
&lt;ituz:2&gt;28
&lt;lat:11&gt;N044 54.155
&lt;lon:11&gt;E020 24.756
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250226
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;�rd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;D�vid N�meth-cs�ka
&lt;name:15&gt;Filip M. Stanic
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250218
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250218
&lt;qso_date_off:8&gt;20250218
&lt;qth:6&gt;JN95VA
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1644
&lt;time_on:4&gt;1644
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1231410188
&lt;app_qrzlog_qsldate:8&gt;20250306
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;40m
&lt;band_rx:3&gt;40m
&lt;call:7&gt;HF95PZK
&lt;cont:2&gt;EU
&lt;country:6&gt;Poland
&lt;distance:3&gt;547
&lt;dxcc:3&gt;269
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:5&gt;7.188
&lt;freq_rx:5&gt;7.188
&lt;gridsquare:6&gt;KO02mg
&lt;lat:11&gt;N052 16.250
&lt;lon:11&gt;E021 02.500
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250226
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;�rd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;D�vid N�meth-cs�ka
&lt;name:59&gt;The 95th anniversary of the PZK and centennial of the IARU 
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250218
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250218
&lt;qso_date_off:8&gt;20250218
&lt;qth:6&gt;Warsaw
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1647
&lt;time_on:4&gt;1647
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1231412782
&lt;app_qrzlog_qsldate:8&gt;20250221
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:7&gt;TM22AAW
&lt;cont:2&gt;EU
&lt;country:6&gt;France
&lt;cqz:2&gt;14
&lt;distance:4&gt;1244
&lt;dxcc:3&gt;227
&lt;email:18&gt;a.pole@laposte.net
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;14.196
&lt;freq_rx:6&gt;14.196
&lt;gridsquare:6&gt;JN18eu
&lt;ituz:2&gt;27
&lt;lat:11&gt;N048 51.250
&lt;lon:11&gt;E002 22.500
&lt;lotw_qsl_rcvd:1&gt;Y
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslrdate:8&gt;20250221
&lt;lotw_qslsdate:8&gt;20250226
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;�rd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;D�vid N�meth-cs�ka
&lt;name:16&gt;François BERGEZ
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250218
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:32&gt;Via F8DVD, buro, direct and LOTW
&lt;qso_date:8&gt;20250218
&lt;qso_date_off:8&gt;20250218
&lt;qth:5&gt;71000
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1701
&lt;time_on:4&gt;1701
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1231447174
&lt;app_qrzlog_qsldate:8&gt;20250226
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;40m
&lt;band_rx:3&gt;40m
&lt;call:6&gt;IT9IJF
&lt;cont:2&gt;EU
&lt;country:5&gt;Italy
&lt;cqz:2&gt;15
&lt;distance:4&gt;1189
&lt;dxcc:3&gt;248
&lt;email:16&gt;it9ijf@gmail.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:5&gt;7.153
&lt;freq_rx:5&gt;7.153
&lt;gridsquare:6&gt;JM77al
&lt;ituz:2&gt;28
&lt;lat:11&gt;N037 28.956
&lt;lon:11&gt;E014 02.845
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250226
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;�rd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;D�vid N�meth-cs�ka
&lt;name:19&gt;Maurizio C. Formica
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250218
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:25&gt;Via bureau-eQSL-Email QSL
&lt;qso_date:8&gt;20250218
&lt;qso_date_off:8&gt;20250218
&lt;qth:13&gt;Caltanissetta
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1827
&lt;time_on:4&gt;1827
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1231447418
&lt;app_qrzlog_qsldate:8&gt;20250221
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;40m
&lt;band_rx:3&gt;40m
&lt;call:8&gt;EA5IYX/P
&lt;cont:2&gt;EU
&lt;country:5&gt;Spain
&lt;cqz:2&gt;14
&lt;distance:4&gt;1979
&lt;dxcc:3&gt;281
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:5&gt;7.153
&lt;freq_rx:5&gt;7.153
&lt;gridsquare:6&gt;IN80dj
&lt;ituz:2&gt;34
&lt;lat:11&gt;N040 23.750
&lt;lon:11&gt;W003 42.500
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250221
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;�rd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;D�vid N�meth-cs�ka
&lt;name:14&gt;Lorenzo Ghitti
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250218
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250218
&lt;qso_date_off:8&gt;20250218
&lt;qth:8&gt;Ibiza .i
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1829
&lt;time_on:4&gt;1829
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1231897107
&lt;app_qrzlog_qsldate:8&gt;20250221
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:5&gt;F4DVO
&lt;cont:2&gt;EU
&lt;country:6&gt;France
&lt;cqz:2&gt;14
&lt;distance:4&gt;1266
&lt;dxcc:3&gt;227
&lt;email:13&gt;f4dvo@free.fr
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;14.226
&lt;freq_rx:6&gt;14.226
&lt;gridsquare:6&gt;JN17bw
&lt;ituz:2&gt;27
&lt;lat:11&gt;N047 56.250
&lt;lon:11&gt;E002 07.500
&lt;lotw_qsl_rcvd:1&gt;Y
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslrdate:8&gt;20250221
&lt;lotw_qslsdate:8&gt;20250221
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;�rd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;D�vid N�meth-cs�ka
&lt;name:16&gt;Arnaud VIGNELLES
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250219
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:26&gt;BUREAU, DIRECT, LOTW, eQSL
&lt;qso_date:8&gt;20250219
&lt;qso_date_off:8&gt;20250219
&lt;qth:19&gt;45450 FAY AUX LOGES
&lt;rst_rcvd:2&gt;57
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1803
&lt;time_on:4&gt;1803
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1231902927
&lt;app_qrzlog_qsldate:8&gt;20250221
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;40m
&lt;band_rx:3&gt;40m
&lt;call:5&gt;S50EL
&lt;cont:2&gt;EU
&lt;country:8&gt;Slovenia
&lt;cqz:2&gt;15
&lt;distance:3&gt;268
&lt;dxcc:3&gt;499
&lt;email:22&gt;s50el.elking@gmail.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:5&gt;7.183
&lt;freq_rx:5&gt;7.183
&lt;gridsquare:6&gt;JN76wm
&lt;ituz:2&gt;28
&lt;lat:11&gt;N046 32.072
&lt;lon:11&gt;E015 50.404
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250221
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;�rd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;D�vid N�meth-cs�ka
&lt;name:12&gt;Elvis Horvat
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250219
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250219
&lt;qso_date_off:8&gt;20250219
&lt;qth:7&gt;Lenart 
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1818
&lt;time_on:4&gt;1818
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1231906200
&lt;app_qrzlog_status:1&gt;2
&lt;band:3&gt;40m
&lt;band_rx:3&gt;40m
&lt;call:6&gt;YU3FMS
&lt;cont:2&gt;EU
&lt;country:6&gt;Serbia
&lt;cqz:2&gt;15
&lt;distance:3&gt;308
&lt;dxcc:3&gt;296
&lt;email:15&gt;filip@yu3fms.rs
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:4&gt;7.14
&lt;freq_rx:4&gt;7.14
&lt;gridsquare:6&gt;JN95VA
&lt;ituz:2&gt;28
&lt;lat:11&gt;N044 54.155
&lt;lon:11&gt;E020 24.756
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250221
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;�rd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;D�vid N�meth-cs�ka
&lt;name:15&gt;Filip M. Stanic
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250219
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250219
&lt;qso_date_off:8&gt;20250219
&lt;qth:6&gt;JN95VA
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1833
&lt;time_on:4&gt;1833
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1232216436
&lt;app_qrzlog_qsldate:8&gt;20250221
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;10m
&lt;band_rx:3&gt;10m
&lt;call:5&gt;M0KXR
&lt;cont:2&gt;EU
&lt;country:16&gt;Northern Ireland
&lt;cqz:2&gt;14
&lt;distance:4&gt;1906
&lt;dxcc:3&gt;265
&lt;email:21&gt;radio@famouspablo.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;28.491
&lt;freq_rx:6&gt;28.491
&lt;gridsquare:6&gt;IO74bu
&lt;iota:6&gt;EU-115
&lt;ituz:2&gt;27
&lt;lat:11&gt;N054 51.591
&lt;lon:11&gt;W005 51.207
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250221
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;�rd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;D�vid N�meth-cs�ka
&lt;name:12&gt;Paul Stewart
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250220
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:28&gt;QSL via public email address
&lt;qso_date:8&gt;20250220
&lt;qso_date_off:8&gt;20250220
&lt;qth:5&gt;Larne
&lt;rst_rcvd:2&gt;57
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1138
&lt;time_on:4&gt;1138
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1232280650
&lt;app_qrzlog_qsldate:8&gt;20250221
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;15m
&lt;band_rx:3&gt;15m
&lt;call:5&gt;R4FCJ
&lt;cont:2&gt;EU
&lt;country:6&gt;Russia
&lt;cqz:2&gt;16
&lt;distance:4&gt;2034
&lt;dxcc:2&gt;54
&lt;email:13&gt;r4fcj@mail.ru
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;21.292
&lt;freq_rx:6&gt;21.292
&lt;gridsquare:6&gt;LO33gc
&lt;ituz:2&gt;29
&lt;lat:11&gt;N053 06.654
&lt;lon:11&gt;E046 33.864
&lt;lotw_qsl_rcvd:1&gt;Y
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslrdate:8&gt;20250221
&lt;lotw_qslsdate:8&gt;20250221
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;�rd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;D�vid N�meth-cs�ka
&lt;name:15&gt;Vladimir Zhukov
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250220
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:31&gt;EQSL / QSL BUREAU / DIRECT POST
&lt;qso_date:8&gt;20250220
&lt;qso_date_off:8&gt;20250220
&lt;qth:22&gt;Kuznetsk, Penza region
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1459
&lt;time_on:4&gt;1459
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1232294765
&lt;app_qrzlog_status:1&gt;2
&lt;band:3&gt;15m
&lt;band_rx:3&gt;15m
&lt;call:5&gt;M0AIA
&lt;cont:2&gt;EU
&lt;country:7&gt;England
&lt;cqz:2&gt;14
&lt;distance:4&gt;1611
&lt;dxcc:3&gt;223
&lt;email:20&gt;pk.online@icloud.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;21.285
&lt;freq_rx:6&gt;21.285
&lt;gridsquare:6&gt;IO93DP
&lt;ituz:2&gt;27
&lt;lat:11&gt;N053 38.128
&lt;lon:11&gt;W001 44.006
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250221
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;�rd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;D�vid N�meth-cs�ka
&lt;name:12&gt;Paul Knapton
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250220
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250220
&lt;qso_date_off:8&gt;20250220
&lt;qth:23&gt;Huddersfield - Waterloo
&lt;rst_rcvd:2&gt;57
&lt;rst_sent:2&gt;58
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1600
&lt;time_on:4&gt;1600
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1232340986
&lt;app_qrzlog_qsldate:8&gt;20250221
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;40m
&lt;band_rx:3&gt;40m
&lt;call:6&gt;OE2ROL
&lt;cont:2&gt;EU
&lt;country:7&gt;Austria
&lt;cqz:2&gt;15
&lt;distance:3&gt;446
&lt;dxcc:3&gt;206
&lt;email:20&gt;roland.kaiser@sbg.at
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:5&gt;7.148
&lt;freq_rx:5&gt;7.148
&lt;gridsquare:8&gt;JN67NQ55
&lt;ituz:2&gt;28
&lt;lat:11&gt;N047 41.250
&lt;lon:11&gt;E013 07.500
&lt;lotw_qsl_rcvd:1&gt;Y
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslrdate:8&gt;20250310
&lt;lotw_qslsdate:8&gt;20250221
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;�rd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;D�vid N�meth-cs�ka
&lt;name:13&gt;Roland Kaiser
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250220
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:33&gt;Bureau, eQSL, LOTW, direct (sase)
&lt;qso_date:8&gt;20250220
&lt;qso_date_off:8&gt;20250220
&lt;qth:12&gt;5400 Hallein
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1753
&lt;time_on:4&gt;1753
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1232344278
&lt;app_qrzlog_qsldate:8&gt;20250221
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;40m
&lt;band_rx:3&gt;40m
&lt;call:6&gt;IZ4GRN
&lt;cont:2&gt;EU
&lt;country:5&gt;Italy
&lt;cqz:2&gt;15
&lt;distance:3&gt;669
&lt;dxcc:3&gt;248
&lt;email:21&gt;ale@twistsproducts.it
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:4&gt;7.14
&lt;freq_rx:4&gt;7.14
&lt;gridsquare:6&gt;JN54ui
&lt;ituz:2&gt;28
&lt;lat:11&gt;N044 21.915
&lt;lon:11&gt;E011 41.829
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250221
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;�rd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;D�vid N�meth-cs�ka
&lt;name:26&gt;ALESSANDRO (ALE) CARMONINI
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250220
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:22&gt;PLEASE ONLY VIA BUREAU
&lt;qso_date:8&gt;20250220
&lt;qso_date_off:8&gt;20250220
&lt;qth:15&gt;IMOLA (Bologna)
&lt;rst_rcvd:2&gt;57
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1804
&lt;time_on:4&gt;1804
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1232642633
&lt;app_qrzlog_status:1&gt;2
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:5&gt;F4CJY
&lt;cont:2&gt;EU
&lt;country:6&gt;France
&lt;cqz:2&gt;14
&lt;distance:4&gt;1170
&lt;dxcc:3&gt;227
&lt;email:17&gt;arnaudbo1@free.fr
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;14.318
&lt;freq_rx:6&gt;14.318
&lt;gridsquare:6&gt;JN23lt
&lt;ituz:2&gt;27
&lt;lat:11&gt;N043 48.750
&lt;lon:11&gt;E004 57.480
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250221
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;�rd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;D�vid N�meth-cs�ka
&lt;name:14&gt;ARNAUD BOERSMA
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250221
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:16&gt;F4CJYMM TK/F4CJY
&lt;qso_date:8&gt;20250221
&lt;qso_date_off:8&gt;20250221
&lt;qth:8&gt;molleges
&lt;rst_rcvd:2&gt;54
&lt;rst_sent:2&gt;54
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;0730
&lt;time_on:4&gt;0730
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1232661750
&lt;app_qrzlog_qsldate:8&gt;20250221
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;15m
&lt;band_rx:3&gt;15m
&lt;call:6&gt;YM3VBR
&lt;cont:2&gt;AS
&lt;country:6&gt;Turkey
&lt;cqz:2&gt;20
&lt;distance:4&gt;1127
&lt;dxcc:3&gt;390
&lt;email:19&gt;ym3vbr@borcelik.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:5&gt;21.27
&lt;freq_rx:5&gt;21.27
&lt;gridsquare:8&gt;KN40NJ44
&lt;ituz:2&gt;39
&lt;lat:11&gt;N040 23.700
&lt;lon:11&gt;E029 07.400
&lt;lotw_qsl_rcvd:1&gt;Y
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslrdate:8&gt;20250221
&lt;lotw_qslsdate:8&gt;20250221
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;�rd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;D�vid N�meth-cs�ka
&lt;name:28&gt;Borcelik Amator Radyo Kulubu
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250221
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:21&gt;Direct to the address
&lt;qso_date:8&gt;20250221
&lt;qso_date_off:8&gt;20250221
&lt;qth:17&gt;No.1 Gemlik BURSA
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1011
&lt;time_on:4&gt;1011
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1232667076
&lt;app_qrzlog_status:1&gt;2
&lt;band:3&gt;15m
&lt;band_rx:3&gt;15m
&lt;call:5&gt;G0OVK
&lt;comment:233&gt;Look at that! We had an other qso 2 days ago. Your callsign was familiar and somehow even your voice. I was having a lunch break during the call, and now I remember the discussion as well, you said the bands were very quiet that day.
&lt;cont:2&gt;EU
&lt;country:7&gt;England
&lt;cqz:2&gt;14
&lt;distance:4&gt;1454
&lt;dxcc:3&gt;223
&lt;email:16&gt;mr2gt@live.co.uk
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;21.245
&lt;freq_rx:6&gt;21.245
&lt;gridsquare:6&gt;IO91vl
&lt;ituz:2&gt;27
&lt;lat:11&gt;N051 29.704
&lt;lon:11&gt;W000 10.547
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250221
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;�rd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;D�vid N�meth-cs�ka
&lt;name:11&gt;RTJ MANSELL
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250221
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250221
&lt;qso_date_off:8&gt;20250221
&lt;qth:10&gt;WILLENHALL
&lt;rst_rcvd:2&gt;57
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1033
&lt;time_on:4&gt;1033
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1232717939
&lt;app_qrzlog_qsldate:8&gt;20250221
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;15m
&lt;band_rx:3&gt;15m
&lt;call:6&gt;SC90SM
&lt;cont:2&gt;EU
&lt;country:6&gt;Sweden
&lt;cqz:2&gt;14
&lt;distance:4&gt;1255
&lt;dxcc:3&gt;284
&lt;email:15&gt;sc90sm@sk5sm.se
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:5&gt;21.25
&lt;freq_rx:5&gt;21.25
&lt;gridsquare:6&gt;JO78mn
&lt;ituz:2&gt;18
&lt;lat:11&gt;N058 32.730
&lt;lon:11&gt;E015 02.458
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250221
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;�rd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;D�vid N�meth-cs�ka
&lt;name:18&gt;SK5SM Club Station
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250221
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:14&gt;Bureau, direct
&lt;qso_date:8&gt;20250221
&lt;qso_date_off:8&gt;20250221
&lt;qth:17&gt;SE-59230 Vadstena
&lt;rst_rcvd:2&gt;57
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1305
&lt;time_on:4&gt;1305
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1232724521
&lt;app_qrzlog_status:1&gt;2
&lt;band:3&gt;15m
&lt;band_rx:3&gt;15m
&lt;call:6&gt;2E0YYY
&lt;cont:2&gt;EU
&lt;country:7&gt;England
&lt;cqz:2&gt;14
&lt;distance:4&gt;1621
&lt;dxcc:3&gt;223
&lt;email:21&gt;m.hunter@ntlworld.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;21.255
&lt;freq_rx:6&gt;21.255
&lt;gridsquare:6&gt;IO83wa
&lt;ituz:2&gt;27
&lt;lat:11&gt;N053 02.012
&lt;lon:11&gt;W002 09.800
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250221
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;�rd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;D�vid N�meth-cs�ka
&lt;name:11&gt;Mike Hunter
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250221
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250221
&lt;qso_date_off:8&gt;20250221
&lt;qth:29&gt;Stoke-on-Trent, Staffordshire
&lt;rst_rcvd:2&gt;57
&lt;rst_sent:2&gt;55
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1335
&lt;time_on:4&gt;1335
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1232736619
&lt;app_qrzlog_qsldate:8&gt;20250312
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;10m
&lt;band_rx:3&gt;10m
&lt;call:5&gt;W1TAM
&lt;cnty:13&gt;VT,Chittenden
&lt;cont:2&gt;NA
&lt;country:13&gt;United States
&lt;cqz:1&gt;5
&lt;distance:4&gt;6687
&lt;dxcc:3&gt;291
&lt;email:18&gt;w1tam2@hotmail.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;28.527
&lt;freq_rx:6&gt;28.527
&lt;gridsquare:6&gt;FN34jm
&lt;ituz:1&gt;8
&lt;lat:11&gt;N044 32.348
&lt;lon:11&gt;W073 13.703
&lt;lotw_qsl_rcvd:1&gt;Y
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslrdate:8&gt;20250221
&lt;lotw_qslsdate:8&gt;20250221
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;�rd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;D�vid N�meth-cs�ka
&lt;name:12&gt;TODD A MYERS
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250221
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:50&gt;100% VIA LOTW, DIRECT (SASE'S APPRECIATED) OR BURO
&lt;qso_date:8&gt;20250221
&lt;qso_date_off:8&gt;20250221
&lt;qth:10&gt;COLCHESTER
&lt;rst_rcvd:2&gt;52
&lt;rst_sent:2&gt;51
&lt;state:2&gt;VT
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1408
&lt;time_on:4&gt;1408
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1232815632
&lt;app_qrzlog_qsldate:8&gt;20250221
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;15m
&lt;band_rx:3&gt;15m
&lt;call:5&gt;M0DCX
&lt;cont:2&gt;EU
&lt;country:7&gt;England
&lt;cqz:2&gt;14
&lt;distance:4&gt;1409
&lt;dxcc:3&gt;223
&lt;email:24&gt;darrenbarwick@icloud.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;21.312
&lt;freq_rx:6&gt;21.312
&lt;gridsquare:6&gt;JO02jg
&lt;ituz:2&gt;27
&lt;lat:11&gt;N052 15.152
&lt;lon:11&gt;E000 45.508
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250221
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:14&gt;Darren Barwick
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250221
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250221
&lt;qso_date_off:8&gt;20250221
&lt;qth:15&gt;Bury St Edmunds
&lt;rst_rcvd:2&gt;58
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1626
&lt;time_on:4&gt;1626
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1233078788
&lt;app_qrzlog_qsldate:8&gt;20250222
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;15m
&lt;band_rx:3&gt;15m
&lt;call:5&gt;G8HBS
&lt;cont:2&gt;EU
&lt;country:7&gt;England
&lt;cqz:2&gt;14
&lt;distance:4&gt;1361
&lt;dxcc:3&gt;223
&lt;email:23&gt;G8hbscqcqdx@yahoo.co.uk
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;21.289
&lt;freq_rx:6&gt;21.289
&lt;gridsquare:6&gt;JO02uq
&lt;ituz:2&gt;27
&lt;lat:11&gt;N052 40.259
&lt;lon:11&gt;E001 41.924
&lt;lotw_qsl_rcvd:1&gt;Y
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslrdate:8&gt;20250222
&lt;lotw_qslsdate:8&gt;20250222
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:19&gt;Julian Peter Osborn
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250222
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:36&gt;DIRECT E MAIL FOR DETAILS OR BY BURO
&lt;qso_date:8&gt;20250222
&lt;qso_date_off:8&gt;20250222
&lt;qth:30&gt;Ormesby Great Yarmouth Norfolk
&lt;rst_rcvd:2&gt;54
&lt;rst_sent:2&gt;57
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;0843
&lt;time_on:4&gt;0843
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1233082709
&lt;app_qrzlog_status:1&gt;N
&lt;band:3&gt;10m
&lt;band_rx:3&gt;10m
&lt;call:6&gt;AN45GR
&lt;cont:2&gt;EU
&lt;country:5&gt;Spain
&lt;distance:4&gt;1979
&lt;dxcc:3&gt;281
&lt;email:30&gt;urandiplomaandalucia@gmail.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;28.458
&lt;freq_rx:6&gt;28.458
&lt;gridsquare:6&gt;IN80dj
&lt;lat:11&gt;N040 23.750
&lt;lon:11&gt;W003 42.500
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250222
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:34&gt;DIPLOMA DIA DE ANDALUCIA "GRANADA"
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250222
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250222
&lt;qso_date_off:8&gt;20250222
&lt;qth:9&gt;ANDALUCIA
&lt;rst_rcvd:2&gt;57
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;0910
&lt;time_on:4&gt;0910
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1233104625
&lt;app_qrzlog_qsldate:8&gt;20250223
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;10m
&lt;band_rx:3&gt;10m
&lt;call:6&gt;MM0TFU
&lt;comment:46&gt;had a good chat about the aspects of ham radio
&lt;cont:2&gt;EU
&lt;country:8&gt;Scotland
&lt;cqz:2&gt;14
&lt;distance:4&gt;1847
&lt;dxcc:3&gt;279
&lt;email:21&gt;mm0tfu@btinternet.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:5&gt;28.39
&lt;freq_rx:5&gt;28.39
&lt;gridsquare:6&gt;IO75qh
&lt;iota:6&gt;EU-005
&lt;ituz:2&gt;27
&lt;lat:11&gt;N055 19.522
&lt;lon:11&gt;W004 38.571
&lt;lotw_qsl_rcvd:1&gt;Y
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslrdate:8&gt;20250223
&lt;lotw_qslsdate:8&gt;20250222
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:15&gt;IAIN MACALISTER
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250222
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250222
&lt;qso_date_off:8&gt;20250222
&lt;qth:7&gt;MAYBOLE
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1022
&lt;time_on:4&gt;1022
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1233144955
&lt;app_qrzlog_status:1&gt;2
&lt;band:3&gt;10m
&lt;band_rx:3&gt;10m
&lt;call:5&gt;OY1OF
&lt;cont:2&gt;EU
&lt;country:13&gt;Faroe Islands
&lt;cqz:2&gt;14
&lt;distance:4&gt;2283
&lt;dxcc:3&gt;222
&lt;email:20&gt;faroephoto@gmail.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;28.382
&lt;freq_rx:6&gt;28.382
&lt;gridsquare:6&gt;IP62oa
&lt;iota:6&gt;EU-018
&lt;ituz:2&gt;27
&lt;lat:11&gt;N062 00.937
&lt;lon:11&gt;W006 45.311
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250222
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:18&gt;Olavur Frederiksen
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250222
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:63&gt;TIM, M0URX, P.O. BOX 17 KENILWORTH WARWICKSHIRE CV8 1SF ENGLAND
&lt;qso_date:8&gt;20250222
&lt;qso_date_off:8&gt;20250222
&lt;qth:9&gt;Torshavn.
&lt;rst_rcvd:2&gt;51
&lt;rst_sent:2&gt;57
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1244
&lt;time_on:4&gt;1244
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1233162571
&lt;app_qrzlog_qsldate:8&gt;20250228
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;10m
&lt;band_rx:3&gt;10m
&lt;call:7&gt;UN/OH7O
&lt;cont:2&gt;AS
&lt;country:10&gt;Kazakhstan
&lt;cqz:2&gt;17
&lt;distance:4&gt;4446
&lt;dxcc:3&gt;130
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;28.527
&lt;freq_rx:6&gt;28.527
&lt;gridsquare:6&gt;MN83po
&lt;ituz:2&gt;31
&lt;lat:11&gt;N043 36.252
&lt;lon:11&gt;E077 17.520
&lt;lotw_qsl_rcvd:1&gt;Y
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslrdate:8&gt;20250223
&lt;lotw_qslsdate:8&gt;20250228
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:5&gt;Maxim
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250222
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:20&gt;eQSL, LOTW, Mail QSL
&lt;qso_date:8&gt;20250222
&lt;qso_date_off:8&gt;20250222
&lt;qth:11&gt;Near Almaty
&lt;rst_rcvd:2&gt;56
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1335
&lt;time_on:4&gt;1335
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1233189194
&lt;app_qrzlog_qsldate:8&gt;20250222
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;10m
&lt;band_rx:3&gt;10m
&lt;call:5&gt;4X6HU
&lt;cont:2&gt;AS
&lt;country:6&gt;Israel
&lt;cqz:2&gt;20
&lt;distance:4&gt;2175
&lt;dxcc:3&gt;336
&lt;email:17&gt;4x6hu73@gmail.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;28.384
&lt;freq_rx:6&gt;28.384
&lt;gridsquare:8&gt;KM72JA02
&lt;ituz:2&gt;39
&lt;lat:11&gt;N032 00.519
&lt;lon:11&gt;E034 45.052
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250222
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:15&gt;RAMI SZTERNFELD
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250222
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:4&gt;rami
&lt;qso_date:8&gt;20250222
&lt;qso_date_off:8&gt;20250222
&lt;qth:7&gt;BAT-YAM
&lt;rst_rcvd:2&gt;57
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1504
&lt;time_on:4&gt;1504
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1233318591
&lt;app_qrzlog_qsldate:8&gt;20250223
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:5&gt;4Z5LA
&lt;cont:2&gt;AS
&lt;country:6&gt;Israel
&lt;cqz:2&gt;20
&lt;distance:4&gt;2180
&lt;dxcc:3&gt;336
&lt;email:15&gt;4z5la@4z5la.net
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:4&gt;14.2
&lt;freq_rx:4&gt;14.2
&lt;gridsquare:6&gt;KM72nc
&lt;ituz:2&gt;39
&lt;lat:11&gt;N032 09.292
&lt;lon:11&gt;E035 06.247
&lt;lotw_qsl_rcvd:1&gt;Y
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslrdate:8&gt;20250222
&lt;lotw_qslsdate:8&gt;20250222
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:15&gt;Ros Bunyat-Zade
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250222
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:46&gt;VIA BUREAU, DIRECT* , LOTW , EQSL - 100 % SURE
&lt;qso_date:8&gt;20250222
&lt;qso_date_off:8&gt;20250222
&lt;qth:13&gt;Nofim 4484100
&lt;rst_rcvd:2&gt;58
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;2024
&lt;time_on:4&gt;2024
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1233520223
&lt;app_qrzlog_status:1&gt;N
&lt;band:3&gt;10m
&lt;band_rx:3&gt;10m
&lt;call:6&gt;A60KWT
&lt;cont:2&gt;AS
&lt;country:20&gt;United Arab Emirates
&lt;distance:4&gt;4039
&lt;dxcc:3&gt;391
&lt;email:16&gt;ea7ftr@gmail.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;28.561
&lt;freq_rx:6&gt;28.561
&lt;gridsquare:6&gt;LL75sg
&lt;lat:11&gt;N025 15.850
&lt;lon:11&gt;E055 34.591
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250223
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:48&gt;KUWAIT NATIONAL & LIBERATION DAY - Special Event
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250223
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:6&gt;EA7FTR
&lt;qso_date:8&gt;20250223
&lt;qso_date_off:8&gt;20250223
&lt;qth:7&gt;sharjah
&lt;rst_rcvd:2&gt;57
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;0800
&lt;time_on:4&gt;0800
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1233522339
&lt;app_qrzlog_status:1&gt;2
&lt;band:3&gt;15m
&lt;band_rx:3&gt;15m
&lt;call:5&gt;R4SBN
&lt;cont:2&gt;EU
&lt;country:6&gt;Russia
&lt;cqz:2&gt;16
&lt;distance:4&gt;1563
&lt;dxcc:2&gt;54
&lt;email:16&gt;nick6007@mail.ru
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;21.295
&lt;freq_rx:6&gt;21.295
&lt;gridsquare:6&gt;KO85ss
&lt;ituz:2&gt;29
&lt;lat:11&gt;N055 46.250
&lt;lon:11&gt;E037 32.500
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250223
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:14&gt;Nikolai Kovtun
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250223
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250223
&lt;qso_date_off:8&gt;20250223
&lt;qth:15&gt;volzhsk mari el
&lt;rst_rcvd:2&gt;58
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;0811
&lt;time_on:4&gt;0811
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1233537737
&lt;app_qrzlog_qsldate:8&gt;20250223
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;10m
&lt;band_rx:3&gt;10m
&lt;call:4&gt;RW4C
&lt;cont:2&gt;EU
&lt;country:6&gt;Russia
&lt;cqz:2&gt;16
&lt;distance:4&gt;1979
&lt;dxcc:2&gt;54
&lt;email:16&gt;rv4ct@rambler.ru
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;28.433
&lt;freq_rx:6&gt;28.433
&lt;gridsquare:6&gt;LO21xm
&lt;ituz:2&gt;29
&lt;lat:11&gt;N051 31.200
&lt;lon:11&gt;E045 57.400
&lt;lotw_qsl_rcvd:1&gt;Y
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslrdate:8&gt;20250223
&lt;lotw_qslsdate:8&gt;20250223
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:19&gt;Dmitriy Baryshnikov
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250223
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:55&gt;bureau, direct +2 dollar or 2 euro, LoTW, eQSL, Clublog
&lt;qso_date:8&gt;20250223
&lt;qso_date_off:8&gt;20250223
&lt;qth:7&gt;Saratov
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;0916
&lt;time_on:4&gt;0916
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1233545123
&lt;app_qrzlog_qsldate:8&gt;20250223
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;10m
&lt;band_rx:3&gt;10m
&lt;call:6&gt;GI0CWV
&lt;cont:2&gt;EU
&lt;country:16&gt;Northern Ireland
&lt;cqz:2&gt;14
&lt;distance:4&gt;1905
&lt;dxcc:3&gt;265
&lt;email:18&gt;gi0cwv@hotmail.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;28.465
&lt;freq_rx:6&gt;28.465
&lt;gridsquare:6&gt;IO74ao
&lt;iota:6&gt;EU-115
&lt;ituz:2&gt;27
&lt;lat:11&gt;N054 35.240
&lt;lon:11&gt;W005 57.917
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250223
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:15&gt;Gerard Devenney
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250223
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:27&gt;QSL via the Bureau & direct
&lt;qso_date:8&gt;20250223
&lt;qso_date_off:8&gt;20250223
&lt;qth:7&gt;Belfast
&lt;rst_rcvd:2&gt;57
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;0946
&lt;time_on:4&gt;0946
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1233565990
&lt;app_qrzlog_qsldate:8&gt;20250228
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:6&gt;IK3SGL
&lt;cont:2&gt;EU
&lt;country:5&gt;Italy
&lt;cqz:2&gt;15
&lt;distance:3&gt;600
&lt;dxcc:3&gt;248
&lt;email:20&gt;ik3sgl@oceanbays.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:5&gt;14.33
&lt;freq_rx:5&gt;14.33
&lt;gridsquare:6&gt;JN65ae
&lt;ituz:2&gt;28
&lt;lat:11&gt;N045 11.677
&lt;lon:11&gt;E012 00.484
&lt;lotw_qsl_rcvd:1&gt;Y
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslrdate:8&gt;20250227
&lt;lotw_qslsdate:8&gt;20250223
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:14&gt;Daniel Ferrato
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250223
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:15&gt;QRZ,LOTW, EQSL,
&lt;qso_date:8&gt;20250223
&lt;qso_date_off:8&gt;20250223
&lt;qth:20&gt;Agna - Loc. Frapiero
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1104
&lt;time_on:4&gt;1104
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1233649352
&lt;app_qrzlog_qsldate:8&gt;20250223
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;10m
&lt;band_rx:3&gt;10m
&lt;call:6&gt;EK6OLS
&lt;cont:2&gt;AS
&lt;country:7&gt;Armenia
&lt;cqz:2&gt;21
&lt;distance:4&gt;2185
&lt;dxcc:2&gt;14
&lt;email:28&gt;edgardublduplexs80@gmail.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:4&gt;28.5
&lt;freq_rx:4&gt;28.5
&lt;gridsquare:6&gt;LN20fe
&lt;ituz:2&gt;29
&lt;lat:11&gt;N040 10.013
&lt;lon:11&gt;E044 29.998
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250223
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:15&gt;Edgar Avetysyan
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250223
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:10&gt;via bureau
&lt;qso_date:8&gt;20250223
&lt;qso_date_off:8&gt;20250223
&lt;qth:7&gt;Yerevan
&lt;rst_rcvd:2&gt;57
&lt;rst_sent:2&gt;57
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1415
&lt;time_on:4&gt;1415
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1234109795
&lt;app_qrzlog_qsldate:8&gt;20250224
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:6&gt;IZ7DOK
&lt;cont:2&gt;EU
&lt;country:5&gt;Italy
&lt;cqz:2&gt;15
&lt;distance:3&gt;802
&lt;dxcc:3&gt;248
&lt;email:16&gt;iz7dok@libero.it
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;14.251
&lt;freq_rx:6&gt;14.251
&lt;gridsquare:6&gt;JN90ch
&lt;ituz:2&gt;28
&lt;lat:11&gt;N040 19.990
&lt;lon:11&gt;E018 10.030
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250224
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:14&gt;MARCO DE CARLO
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250224
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250224
&lt;qso_date_off:8&gt;20250224
&lt;qth:11&gt;73100 LECCE
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;0644
&lt;time_on:4&gt;0644
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1234112591
&lt;app_qrzlog_qsldate:8&gt;20250224
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:6&gt;IU1KAE
&lt;cont:2&gt;EU
&lt;country:5&gt;Italy
&lt;cqz:2&gt;15
&lt;distance:3&gt;834
&lt;dxcc:3&gt;248
&lt;email:16&gt;IU1KAE@libero.it
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;14.214
&lt;freq_rx:6&gt;14.214
&lt;gridsquare:8&gt;JN45EU78
&lt;ituz:2&gt;28
&lt;lat:11&gt;N045 52.166
&lt;lon:11&gt;E008 23.964
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250224
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:14&gt;Davide Berrone
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250224
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250224
&lt;qso_date_off:8&gt;20250224
&lt;qth:11&gt;Omegna (VB)
&lt;rst_rcvd:2&gt;57
&lt;rst_sent:2&gt;57
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;0704
&lt;time_on:4&gt;0704
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1234283385
&lt;app_qrzlog_status:1&gt;2
&lt;band:3&gt;15m
&lt;band_rx:3&gt;15m
&lt;call:5&gt;M7TPZ
&lt;cont:2&gt;EU
&lt;country:7&gt;England
&lt;cqz:2&gt;14
&lt;distance:4&gt;1454
&lt;dxcc:3&gt;223
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;21.283
&lt;freq_rx:6&gt;21.283
&lt;gridsquare:6&gt;IO91vl
&lt;iota:4&gt;none
&lt;ituz:2&gt;27
&lt;lat:11&gt;N051 29.704
&lt;lon:11&gt;W000 10.547
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250224
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:11&gt;Tim Poulter
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250224
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250224
&lt;qso_date_off:8&gt;20250224
&lt;qth:11&gt;Manningtree
&lt;rst_rcvd:2&gt;55
&lt;rst_sent:2&gt;57
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1510
&lt;time_on:4&gt;1510
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1234299000
&lt;app_qrzlog_qsldate:8&gt;20250225
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:5&gt;ON6WM
&lt;cont:2&gt;EU
&lt;country:7&gt;Belgium
&lt;cqz:2&gt;14
&lt;distance:4&gt;1115
&lt;dxcc:3&gt;209
&lt;email:17&gt;onsixwm@gmail.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;14.204
&lt;freq_rx:6&gt;14.204
&lt;gridsquare:6&gt;JO20gs
&lt;iota:4&gt;none
&lt;ituz:2&gt;27
&lt;lat:11&gt;N050 46.250
&lt;lon:11&gt;E004 32.500
&lt;lotw_qsl_rcvd:1&gt;Y
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslrdate:8&gt;20250224
&lt;lotw_qslsdate:8&gt;20250224
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:13&gt;matheo hazaer
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250224
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250224
&lt;qso_date_off:8&gt;20250224
&lt;qth:8&gt;overijse
&lt;rst_rcvd:2&gt;58
&lt;rst_sent:2&gt;55
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1540
&lt;time_on:4&gt;1540
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1234301941
&lt;app_qrzlog_status:1&gt;2
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:6&gt;IK6OSZ
&lt;cont:2&gt;EU
&lt;country:5&gt;Italy
&lt;cqz:2&gt;15
&lt;distance:3&gt;652
&lt;dxcc:3&gt;248
&lt;email:25&gt;saverio.formica@libero.it
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;14.262
&lt;freq_rx:6&gt;14.262
&lt;gridsquare:8&gt;JN63KO30
&lt;ituz:2&gt;28
&lt;lat:11&gt;N043 35.154
&lt;lon:11&gt;E012 51.665
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250224
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:15&gt;SAVERIO FORMICA
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250224
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:13&gt;DIRECT / EQSL
&lt;qso_date:8&gt;20250224
&lt;qso_date_off:8&gt;20250224
&lt;qth:18&gt;61045 PERGOLA (PU)
&lt;rst_rcvd:2&gt;57
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1550
&lt;time_on:4&gt;1550
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1234326152
&lt;app_qrzlog_status:1&gt;N
&lt;band:3&gt;15m
&lt;band_rx:3&gt;15m
&lt;call:5&gt;G1RUE
&lt;cont:2&gt;EU
&lt;country:7&gt;England
&lt;cqz:2&gt;14
&lt;distance:4&gt;1541
&lt;dxcc:3&gt;223
&lt;email:19&gt;djdeljohn@gmail.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;21.295
&lt;freq_rx:6&gt;21.295
&lt;gridsquare:6&gt;IO93qq
&lt;lat:11&gt;N053 41.168
&lt;lon:11&gt;W000 35.637
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250224
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:8&gt;DEL JOHN
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250224
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250224
&lt;qso_date_off:8&gt;20250224
&lt;qth:52&gt;Lincoln 20 mls 30km N. North Lincolnshire (WAB-SE92)
&lt;rst_rcvd:2&gt;57
&lt;rst_sent:2&gt;57
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1636
&lt;time_on:4&gt;1636
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1234336156
&lt;app_qrzlog_status:1&gt;2
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:7&gt;OZ4WIND
&lt;cont:2&gt;EU
&lt;country:7&gt;Denmark
&lt;cqz:2&gt;14
&lt;distance:4&gt;1122
&lt;dxcc:3&gt;221
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;14.224
&lt;freq_rx:6&gt;14.224
&lt;gridsquare:8&gt;JO45VU81
&lt;ituz:2&gt;18
&lt;lat:11&gt;N055 50.363
&lt;lon:11&gt;E009 49.351
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250224
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:18&gt;John Nieuwenhuizen
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250224
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250224
&lt;qso_date_off:8&gt;20250224
&lt;qth:7&gt;Horsens
&lt;rst_rcvd:2&gt;55
&lt;rst_sent:2&gt;55
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1702
&lt;time_on:4&gt;1702
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1234554197
&lt;app_qrzlog_qsldate:8&gt;20250225
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;40m
&lt;band_rx:3&gt;40m
&lt;call:6&gt;IV3WTJ
&lt;cont:2&gt;EU
&lt;country:5&gt;Italy
&lt;cqz:1&gt;3
&lt;distance:3&gt;476
&lt;dxcc:3&gt;248
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:5&gt;7.145
&lt;freq_rx:5&gt;7.145
&lt;gridsquare:6&gt;JN66ne
&lt;ituz:1&gt;3
&lt;lat:11&gt;N046 11.200
&lt;lon:11&gt;E013 07.400
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250225
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:10&gt;ALBERTO A.
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250225
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250225
&lt;qso_date_off:8&gt;20250225
&lt;qth:5&gt;UDINE
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;0629
&lt;time_on:4&gt;0629
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1234732827
&lt;app_qrzlog_status:1&gt;N
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:4&gt;RN2H
&lt;cont:2&gt;EU
&lt;country:6&gt;Russia
&lt;distance:4&gt;1588
&lt;dxcc:2&gt;54
&lt;email:17&gt;rv3dmx@rambler.ru
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:5&gt;14.25
&lt;freq_rx:5&gt;14.25
&lt;gridsquare:6&gt;KO95bp
&lt;lat:11&gt;N055 38.700
&lt;lon:11&gt;E038 07.400
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250225
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:18&gt;Sergey V. Shatalov
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250225
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250225
&lt;qso_date_off:8&gt;20250225
&lt;qth:6&gt;Bykovo
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1628
&lt;time_on:4&gt;1628
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1234740656
&lt;app_qrzlog_status:1&gt;N
&lt;band:3&gt;15m
&lt;band_rx:3&gt;15m
&lt;call:5&gt;G3ART
&lt;comment:28&gt;got lost him during the talk
&lt;cont:2&gt;EU
&lt;country:7&gt;England
&lt;distance:4&gt;1488
&lt;dxcc:3&gt;223
&lt;email:28&gt;arthur@arthurwolstenholme.uk
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:5&gt;21.27
&lt;freq_rx:5&gt;21.27
&lt;gridsquare:6&gt;IO92uo
&lt;iota:4&gt;none
&lt;lat:11&gt;N052 36.103
&lt;lon:11&gt;W000 17.495
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250225
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:19&gt;Arthur Wolstenholme
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250225
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250225
&lt;qso_date_off:8&gt;20250225
&lt;qth:12&gt;Peterborough
&lt;rst_rcvd:2&gt;57
&lt;rst_sent:2&gt;57
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1653
&lt;time_on:4&gt;1653
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1234748482
&lt;app_qrzlog_status:1&gt;S
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:5&gt;SK0HB
&lt;cont:2&gt;EU
&lt;country:6&gt;Sweden
&lt;cqz:2&gt;14
&lt;distance:4&gt;1300
&lt;dxcc:3&gt;284
&lt;email:13&gt;info@sk0hb.se
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;14.325
&lt;freq_rx:6&gt;14.325
&lt;gridsquare:6&gt;JO89we
&lt;ituz:2&gt;18
&lt;lat:11&gt;N059 11.351
&lt;lon:11&gt;E017 54.689
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250225
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:37&gt;Ham radioclub Botkyrka Radio Amateurs
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250225
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:10&gt;Via bureau
&lt;qso_date:8&gt;20250225
&lt;qso_date_off:8&gt;20250225
&lt;qth:8&gt;Tullinge
&lt;rst_rcvd:2&gt;55
&lt;rst_sent:2&gt;55
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1725
&lt;time_on:4&gt;1725
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1235101275
&lt;app_qrzlog_status:1&gt;N
&lt;band:3&gt;15m
&lt;band_rx:3&gt;15m
&lt;call:5&gt;G1RUE
&lt;cont:2&gt;EU
&lt;country:7&gt;England
&lt;cqz:2&gt;14
&lt;distance:4&gt;1541
&lt;dxcc:3&gt;223
&lt;email:19&gt;djdeljohn@gmail.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:5&gt;21.24
&lt;freq_rx:5&gt;21.24
&lt;gridsquare:6&gt;IO93qq
&lt;lat:11&gt;N053 41.168
&lt;lon:11&gt;W000 35.637
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250226
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:8&gt;DEL JOHN
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250226
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250226
&lt;qso_date_off:8&gt;20250226
&lt;qth:52&gt;Lincoln 20 mls 30km N. North Lincolnshire (WAB-SE92)
&lt;rst_rcvd:2&gt;56
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1642
&lt;time_on:4&gt;1642
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1235133235
&lt;app_qrzlog_qsldate:8&gt;20250227
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;15m
&lt;band_rx:3&gt;15m
&lt;call:7&gt;M0DQO/M
&lt;comment:39&gt;lost you after discussing the RST stuff
&lt;cont:2&gt;EU
&lt;country:7&gt;England
&lt;cqz:2&gt;14
&lt;distance:4&gt;1440
&lt;dxcc:3&gt;223
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:5&gt;21.25
&lt;freq_rx:5&gt;21.25
&lt;gridsquare:6&gt;IO90vl
&lt;ituz:2&gt;27
&lt;lat:11&gt;N050 28.752
&lt;lon:11&gt;W000 12.480
&lt;lotw_qsl_rcvd:1&gt;Y
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslrdate:8&gt;20250226
&lt;lotw_qslsdate:8&gt;20250226
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:10&gt;Chris Bloy
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250226
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250226
&lt;qso_date_off:8&gt;20250226
&lt;qth:7&gt;FAREHAM
&lt;rst_rcvd:2&gt;56
&lt;rst_sent:2&gt;56
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1746
&lt;time_on:4&gt;1746
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1235142039
&lt;app_qrzlog_status:1&gt;2
&lt;band:3&gt;40m
&lt;band_rx:3&gt;40m
&lt;call:6&gt;E7POTA
&lt;cont:2&gt;EU
&lt;country:22&gt;Bosnia and Herzegovina
&lt;cqz:2&gt;15
&lt;distance:3&gt;279
&lt;dxcc:3&gt;501
&lt;email:16&gt;e7pota@gmail.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:4&gt;7.16
&lt;freq_rx:4&gt;7.16
&lt;gridsquare:6&gt;JN95ia
&lt;ituz:2&gt;28
&lt;lat:11&gt;N045 01.200
&lt;lon:11&gt;E018 42.400
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250226
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:20&gt;Group Radio Amateurs
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250226
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250226
&lt;qso_date_off:8&gt;20250226
&lt;qth:6&gt;Orasje
&lt;rst_rcvd:2&gt;57
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1815
&lt;time_on:4&gt;1815
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1235159471
&lt;app_qrzlog_qsldate:8&gt;20250226
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;40m
&lt;band_rx:3&gt;40m
&lt;call:4&gt;PB5X
&lt;cont:2&gt;EU
&lt;country:11&gt;Netherlands
&lt;cqz:2&gt;14
&lt;distance:4&gt;1131
&lt;dxcc:3&gt;263
&lt;email:16&gt;roma-dx@ziggo.nl
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:4&gt;7.14
&lt;freq_rx:4&gt;7.14
&lt;gridsquare:6&gt;JO21io
&lt;ituz:2&gt;27
&lt;lat:11&gt;N051 37.081
&lt;lon:11&gt;E004 40.811
&lt;lotw_qsl_rcvd:1&gt;Y
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslrdate:8&gt;20250304
&lt;lotw_qslsdate:8&gt;20250226
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:8&gt;Roberto 
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250226
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:29&gt;VIA DIRECT 2$ + SAE OR BUREAU
&lt;qso_date:8&gt;20250226
&lt;qso_date_off:8&gt;20250226
&lt;qth:7&gt;4800 DD
&lt;rst_rcvd:2&gt;57
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1918
&lt;time_on:4&gt;1918
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1235160368
&lt;app_qrzlog_status:1&gt;N
&lt;band:3&gt;40m
&lt;band_rx:3&gt;40m
&lt;call:6&gt;IZ6BXV
&lt;cont:2&gt;EU
&lt;country:5&gt;Italy
&lt;distance:3&gt;717
&lt;dxcc:3&gt;248
&lt;email:30&gt;difrancescoantonio@virgilio.it
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:5&gt;7.139
&lt;freq_rx:5&gt;7.139
&lt;gridsquare:6&gt;JN62ks
&lt;lat:11&gt;N042 46.250
&lt;lon:11&gt;E012 52.500
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250226
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:17&gt;TONY di francesco
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250226
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250226
&lt;qso_date_off:8&gt;20250226
&lt;qth:13&gt;PESCARA 65100
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1922
&lt;time_on:4&gt;1922
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1235337576
&lt;app_qrzlog_qsldate:8&gt;20250306
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;40m
&lt;band_rx:3&gt;40m
&lt;call:9&gt;SP100IARU
&lt;cont:2&gt;EU
&lt;country:6&gt;Poland
&lt;distance:3&gt;547
&lt;dxcc:3&gt;269
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:5&gt;7.144
&lt;freq_rx:5&gt;7.144
&lt;gridsquare:6&gt;KO02mg
&lt;lat:11&gt;N052 16.250
&lt;lon:11&gt;E021 02.500
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250227
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:59&gt;The 95th anniversary of the PZK and centennial of the IARU 
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250227
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250227
&lt;qso_date_off:8&gt;20250227
&lt;qth:6&gt;Warsaw
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;0649
&lt;time_on:4&gt;0649
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1235450579
&lt;app_qrzlog_status:1&gt;2
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:6&gt;5P4EMC
&lt;cont:2&gt;EU
&lt;country:7&gt;Denmark
&lt;cqz:1&gt;1
&lt;distance:4&gt;1124
&lt;dxcc:3&gt;221
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;14.245
&lt;freq_rx:6&gt;14.245
&lt;gridsquare:8&gt;JO45VU43
&lt;ituz:1&gt;1
&lt;lat:11&gt;N055 50.974
&lt;lon:11&gt;E009 47.456
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250227
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:18&gt;John Nieuwenhuizen
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250227
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250227
&lt;qso_date_off:8&gt;20250227
&lt;qth:7&gt;Horsens
&lt;rst_rcvd:2&gt;44
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1635
&lt;time_on:4&gt;1635
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1235698838
&lt;app_qrzlog_qsldate:8&gt;20250228
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;10m
&lt;band_rx:3&gt;10m
&lt;call:6&gt;RA6ADQ
&lt;cont:2&gt;EU
&lt;country:6&gt;Russia
&lt;distance:4&gt;1563
&lt;dxcc:2&gt;54
&lt;email:16&gt;ra6adq@yandex.ru
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;28.485
&lt;freq_rx:6&gt;28.485
&lt;gridsquare:6&gt;KO85ss
&lt;lat:11&gt;N055 46.250
&lt;lon:11&gt;E037 32.500
&lt;lotw_qsl_rcvd:1&gt;Y
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslrdate:8&gt;20250228
&lt;lotw_qslsdate:8&gt;20250228
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:16&gt;Gennady Dolbenko
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250228
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:28&gt;eQSL.cc, HRDLOG.net, Direct.
&lt;qso_date:8&gt;20250228
&lt;qso_date_off:8&gt;20250228
&lt;qth:34&gt;Krasnodar region. st. Buzinovskaya
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;0847
&lt;time_on:4&gt;0847
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1235703717
&lt;app_qrzlog_status:1&gt;N
&lt;band:3&gt;10m
&lt;band_rx:3&gt;10m
&lt;call:6&gt;AN7AND
&lt;cont:2&gt;EU
&lt;country:5&gt;Spain
&lt;distance:4&gt;1979
&lt;dxcc:3&gt;281
&lt;email:30&gt;urandiplomaandalucia@gmail.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;28.444
&lt;freq_rx:6&gt;28.444
&lt;gridsquare:6&gt;IN80dj
&lt;lat:11&gt;N040 23.750
&lt;lon:11&gt;W003 42.500
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250228
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:35&gt;DIPLOMA DIA DE ANDALUCIA "ESPECIAL"
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250228
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250228
&lt;qso_date_off:8&gt;20250228
&lt;qth:9&gt;ANDALUCIA
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;0929
&lt;time_on:4&gt;0929
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1235706788
&lt;app_qrzlog_qsldate:8&gt;20250228
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:5&gt;EI4IT
&lt;cont:2&gt;EU
&lt;country:7&gt;Ireland
&lt;cqz:2&gt;14
&lt;distance:4&gt;2023
&lt;dxcc:3&gt;245
&lt;email:24&gt;Johnneetar2013@gmail.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:5&gt;14.25
&lt;freq_rx:5&gt;14.25
&lt;gridsquare:6&gt;IO64dw
&lt;iota:6&gt;EU-115
&lt;ituz:2&gt;27
&lt;lat:11&gt;N054 55.992
&lt;lon:11&gt;W007 42.940
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250228
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:8&gt;John Nee
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250228
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:13&gt;NO QSL PLEASE
&lt;qso_date:8&gt;20250228
&lt;qso_date_off:8&gt;20250228
&lt;qth:11&gt;CO. DONEGAL
&lt;rst_rcvd:2&gt;33
&lt;rst_sent:2&gt;57
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;0955
&lt;time_on:4&gt;0955
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1235728593
&lt;app_qrzlog_status:1&gt;N
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:6&gt;IZ6BXV
&lt;cont:2&gt;EU
&lt;country:5&gt;Italy
&lt;distance:3&gt;717
&lt;dxcc:3&gt;248
&lt;email:30&gt;difrancescoantonio@virgilio.it
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:5&gt;14.27
&lt;freq_rx:5&gt;14.27
&lt;gridsquare:6&gt;JN62ks
&lt;lat:11&gt;N042 46.250
&lt;lon:11&gt;E012 52.500
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250228
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:17&gt;TONY di francesco
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250228
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250228
&lt;qso_date_off:8&gt;20250228
&lt;qth:13&gt;PESCARA 65100
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;57
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1156
&lt;time_on:4&gt;1156
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1235730004
&lt;app_qrzlog_status:1&gt;N
&lt;band:3&gt;15m
&lt;band_rx:3&gt;15m
&lt;call:6&gt;UN7CFI
&lt;cont:2&gt;AS
&lt;country:10&gt;Kazakhstan
&lt;distance:4&gt;3460
&lt;dxcc:3&gt;130
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;21.235
&lt;freq_rx:6&gt;21.235
&lt;gridsquare:6&gt;MO44fv
&lt;lat:11&gt;N054 52.685
&lt;lon:11&gt;E068 27.741
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250228
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:36&gt;Dmitry Дмитрий Сергеев
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250228
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:9&gt;via RW6HS
&lt;qso_date:8&gt;20250228
&lt;qso_date_off:8&gt;20250228
&lt;qth:34&gt;Мамлютский р-н, Сев
&lt;rst_rcvd:2&gt;58
&lt;rst_sent:2&gt;53
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1203
&lt;time_on:4&gt;1203
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1235735250
&lt;app_qrzlog_status:1&gt;N
&lt;band:3&gt;40m
&lt;band_rx:3&gt;40m
&lt;call:6&gt;HA8LCA
&lt;cont:2&gt;EU
&lt;country:7&gt;Hungary
&lt;distance:1&gt;2
&lt;dxcc:3&gt;239
&lt;email:16&gt;ha8lca@gmail.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:5&gt;7.093
&lt;freq_rx:5&gt;7.093
&lt;gridsquare:6&gt;JN97mm
&lt;lat:11&gt;N047 31.250
&lt;lon:11&gt;E019 02.500
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250228
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:14&gt;Mócza József
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250228
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250228
&lt;qso_date_off:8&gt;20250228
&lt;qth:18&gt;Kiskunfélegyháza
&lt;rst_rcvd:2&gt;55
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1219
&lt;time_on:4&gt;1219
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1235741404
&lt;app_qrzlog_status:1&gt;2
&lt;band:3&gt;40m
&lt;band_rx:3&gt;40m
&lt;call:5&gt;HA6RR
&lt;cont:2&gt;EU
&lt;country:7&gt;Hungary
&lt;cqz:2&gt;15
&lt;distance:2&gt;91
&lt;dxcc:3&gt;239
&lt;email:21&gt;palfiricsi@icloud.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:5&gt;7.093
&lt;freq_rx:5&gt;7.093
&lt;gridsquare:6&gt;KN07bw
&lt;ituz:2&gt;28
&lt;lat:11&gt;N047 56.272
&lt;lon:11&gt;E020 06.650
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250228
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:13&gt;Richard Palfi
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250228
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:26&gt;LoTw and Clublog or direct
&lt;qso_date:8&gt;20250228
&lt;qso_date_off:8&gt;20250228
&lt;qth:10&gt;RECSK 3245
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1259
&lt;time_on:4&gt;1220
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1235741437
&lt;app_qrzlog_status:1&gt;N
&lt;band:3&gt;40m
&lt;band_rx:3&gt;40m
&lt;call:5&gt;HA7TM
&lt;cont:2&gt;EU
&lt;country:7&gt;Hungary
&lt;cqz:2&gt;15
&lt;distance:2&gt;18
&lt;dxcc:3&gt;239
&lt;email:14&gt;ha7tm@ha7tm.hu
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:5&gt;7.093
&lt;freq_rx:5&gt;7.093
&lt;gridsquare:6&gt;JN97kk
&lt;ituz:2&gt;28
&lt;lat:11&gt;N047 25.005
&lt;lon:11&gt;E018 53.160
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250228
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:19&gt;Tibor (Tibi) Nemeth
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250228
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:28&gt;VIA BURO AND LOTW AND DIRECT
&lt;qso_date:8&gt;20250228
&lt;qso_date_off:8&gt;20250228
&lt;qth:3&gt;ERD
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;59
&lt;state:1&gt;H
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1225
&lt;time_on:4&gt;1225
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1235741562
&lt;app_qrzlog_qsldate:8&gt;20250301
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;40m
&lt;band_rx:3&gt;40m
&lt;call:5&gt;HA6RR
&lt;comment:19&gt;Equalizer beallitas
&lt;cont:2&gt;EU
&lt;country:7&gt;Hungary
&lt;cqz:2&gt;15
&lt;distance:2&gt;91
&lt;dxcc:3&gt;239
&lt;email:21&gt;palfiricsi@icloud.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:5&gt;7.106
&lt;freq_rx:5&gt;7.106
&lt;gridsquare:6&gt;KN07bw
&lt;ituz:2&gt;28
&lt;lat:11&gt;N047 56.272
&lt;lon:11&gt;E020 06.650
&lt;lotw_qsl_rcvd:1&gt;Y
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslrdate:8&gt;20250301
&lt;lotw_qslsdate:8&gt;20250228
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:13&gt;Richard Palfi
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250228
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:26&gt;LoTw and Clublog or direct
&lt;qso_date:8&gt;20250228
&lt;qso_date_off:8&gt;20250228
&lt;qth:10&gt;RECSK 3245
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1300
&lt;time_on:4&gt;1300
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1235743285
&lt;app_qrzlog_status:1&gt;N
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:6&gt;EH7AID
&lt;cont:2&gt;EU
&lt;country:5&gt;Spain
&lt;distance:4&gt;1979
&lt;dxcc:3&gt;281
&lt;email:27&gt;EA7IXMFrancisco@hotmail.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:4&gt;14.2
&lt;freq_rx:4&gt;14.2
&lt;gridsquare:6&gt;IN80dj
&lt;lat:11&gt;N040 23.750
&lt;lon:11&gt;W003 42.500
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250228
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:39&gt;Solidarity Campaign All for José David
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250228
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:41&gt;QSL VIA EMAIL IN QSLCREATOR HamRadioDx.es
&lt;qso_date:8&gt;20250228
&lt;qso_date_off:8&gt;20250228
&lt;qth:33&gt;Radio Amateurs for Radio Amateurs
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;56
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1306
&lt;time_on:4&gt;1306
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1235747672
&lt;app_qrzlog_status:1&gt;N
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:5&gt;R2GDQ
&lt;cont:2&gt;EU
&lt;country:6&gt;Russia
&lt;distance:3&gt;810
&lt;dxcc:2&gt;54
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;14.195
&lt;freq_rx:6&gt;14.195
&lt;gridsquare:6&gt;KO04ir
&lt;lat:11&gt;N054 43.750
&lt;lon:11&gt;E020 42.500
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250228
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250228
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250228
&lt;qso_date_off:8&gt;20250228
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1328
&lt;time_on:4&gt;1328
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1235748732
&lt;app_qrzlog_qsldate:8&gt;20250228
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:6&gt;ON6WDL
&lt;cont:2&gt;EU
&lt;country:7&gt;Belgium
&lt;cqz:2&gt;14
&lt;distance:4&gt;1091
&lt;dxcc:3&gt;209
&lt;email:16&gt;on6wdl@gmail.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;14.225
&lt;freq_rx:6&gt;14.225
&lt;gridsquare:6&gt;JO20lw
&lt;ituz:2&gt;27
&lt;lat:11&gt;N050 56.250
&lt;lon:11&gt;E004 57.500
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250228
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:14&gt;ADAM KHITANAEV
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250228
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250228
&lt;qso_date_off:8&gt;20250228
&lt;qth:7&gt;Fléron
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1335
&lt;time_on:4&gt;1335
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1235748795
&lt;app_qrzlog_status:1&gt;N
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:5&gt;R6LNI
&lt;cont:2&gt;EU
&lt;country:6&gt;Russia
&lt;distance:4&gt;1569
&lt;dxcc:2&gt;54
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;14.225
&lt;freq_rx:6&gt;14.225
&lt;gridsquare:6&gt;KN97xe
&lt;ituz:2&gt;29
&lt;lat:11&gt;N047 11.250
&lt;lon:11&gt;E039 57.500
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250228
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:12&gt;Arut Avakian
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250228
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:26&gt;QSL directly to my address
&lt;qso_date:8&gt;20250228
&lt;qso_date_off:8&gt;20250228
&lt;qth:13&gt;Rostov on Don
&lt;rst_rcvd:2&gt;55
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1336
&lt;time_on:4&gt;1336
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1235751248
&lt;app_qrzlog_status:1&gt;N
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:6&gt;IZ8NYE
&lt;comment:24&gt;Had a great chat! Thanks
&lt;cont:2&gt;EU
&lt;country:5&gt;Italy
&lt;cqz:2&gt;15
&lt;distance:3&gt;873
&lt;dxcc:3&gt;248
&lt;email:16&gt;iz8nye@libero.it
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;14.269
&lt;freq_rx:6&gt;14.269
&lt;gridsquare:6&gt;JN70tb
&lt;ituz:2&gt;28
&lt;lat:11&gt;N040 04.552
&lt;lon:11&gt;E015 35.134
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;N
&lt;lotw_qslsdate:8&gt;20250228
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:16&gt;Biagio Barberino
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250228
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:20&gt;BUREAU, DIRECT, EQSL
&lt;qso_date:8&gt;20250228
&lt;qso_date_off:8&gt;20250228
&lt;qth:34&gt;Villammare di Vibonati ( Salerno )
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1349
&lt;time_on:4&gt;1349
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1235754445
&lt;app_qrzlog_qsldate:8&gt;20250228
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:5&gt;4L1BB
&lt;cont:2&gt;AS
&lt;country:7&gt;Georgia
&lt;cqz:2&gt;21
&lt;distance:4&gt;2148
&lt;dxcc:2&gt;75
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;14.269
&lt;freq_rx:6&gt;14.269
&lt;gridsquare:6&gt;LN21px
&lt;ituz:2&gt;21
&lt;lat:11&gt;N041 58.700
&lt;lon:11&gt;E045 17.400
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250228
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:20&gt;Vepkhо Khosiashvili
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250228
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:49&gt;VIA QSL MANAGER EA5 GL PEDRO MIGUEL RONDA MONSELL
&lt;qso_date:8&gt;20250228
&lt;qso_date_off:8&gt;20250228
&lt;qth:17&gt;AKHMETA. KISTAURI
&lt;rst_rcvd:2&gt;55
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1408
&lt;time_on:4&gt;1408
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1235756912
&lt;app_qrzlog_qsldate:8&gt;20250228
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;10m
&lt;band_rx:3&gt;10m
&lt;call:6&gt;EK6OLS
&lt;cont:2&gt;AS
&lt;country:7&gt;Armenia
&lt;cqz:2&gt;21
&lt;distance:4&gt;2185
&lt;dxcc:2&gt;14
&lt;email:28&gt;edgardublduplexs80@gmail.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:5&gt;28.51
&lt;freq_rx:5&gt;28.51
&lt;gridsquare:6&gt;LN20fe
&lt;ituz:2&gt;29
&lt;lat:11&gt;N040 10.013
&lt;lon:11&gt;E044 29.998
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250228
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:15&gt;Edgar Avetysyan
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250228
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:10&gt;via bureau
&lt;qso_date:8&gt;20250228
&lt;qso_date_off:8&gt;20250228
&lt;qth:7&gt;Yerevan
&lt;rst_rcvd:2&gt;57
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1411
&lt;time_on:4&gt;1411
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1235761240
&lt;app_qrzlog_status:1&gt;N
&lt;band:3&gt;15m
&lt;band_rx:3&gt;15m
&lt;call:5&gt;KB3WD
&lt;cnty:9&gt;MD,Howard
&lt;cont:2&gt;NA
&lt;country:13&gt;United States
&lt;distance:4&gt;7276
&lt;dxcc:3&gt;291
&lt;email:27&gt;advancevideoinc@comcast.net
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;21.248
&lt;freq_rx:6&gt;21.248
&lt;gridsquare:6&gt;FM19pj
&lt;lat:11&gt;N039 23.293
&lt;lon:11&gt;W076 40.380
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250228
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:14&gt;VITALY GALILOV
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250228
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250228
&lt;qso_date_off:8&gt;20250228
&lt;qth:9&gt;BALTIMORE
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;59
&lt;state:2&gt;MD
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1428
&lt;time_on:4&gt;1428
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1235762696
&lt;app_qrzlog_qsldate:8&gt;20250228
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;15m
&lt;band_rx:3&gt;15m
&lt;call:8&gt;2E0FTD/P
&lt;cont:2&gt;EU
&lt;country:7&gt;England
&lt;cqz:2&gt;14
&lt;distance:4&gt;1454
&lt;dxcc:3&gt;223
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;21.254
&lt;freq_rx:6&gt;21.254
&lt;gridsquare:8&gt;IO91VL88
&lt;ituz:2&gt;27
&lt;lat:11&gt;N051 29.704
&lt;lon:11&gt;W000 10.547
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250228
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:13&gt;David Raymond
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250228
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250228
&lt;qso_date_off:8&gt;20250228
&lt;qth:25&gt;Wolsingham. County Durham
&lt;rst_rcvd:2&gt;54
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1432
&lt;time_on:4&gt;1432
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1235764007
&lt;app_qrzlog_status:1&gt;N
&lt;band:3&gt;15m
&lt;band_rx:3&gt;15m
&lt;call:5&gt;EC5SP
&lt;cont:2&gt;EU
&lt;country:5&gt;Spain
&lt;distance:4&gt;1843
&lt;dxcc:3&gt;281
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;21.269
&lt;freq_rx:6&gt;21.269
&lt;gridsquare:6&gt;IM98sv
&lt;lat:11&gt;N038 53.750
&lt;lon:11&gt;W000 27.500
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250228
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:7&gt;Carlos 
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250228
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:10&gt;via bureau
&lt;qso_date:8&gt;20250228
&lt;qso_date_off:8&gt;20250228
&lt;qth:20&gt;Alfarrasi (Valencia)
&lt;rst_rcvd:2&gt;57
&lt;rst_sent:2&gt;57
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1438
&lt;time_on:4&gt;1438
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1235764310
&lt;app_qrzlog_qsldate:8&gt;20250228
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:5&gt;ON5DN
&lt;cont:2&gt;EU
&lt;country:7&gt;Belgium
&lt;cqz:2&gt;14
&lt;distance:4&gt;1136
&lt;dxcc:3&gt;209
&lt;email:22&gt;diane.nuyts@telenet.be
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;14.254
&lt;freq_rx:6&gt;14.254
&lt;gridsquare:8&gt;JO21FH44
&lt;ituz:2&gt;27
&lt;lat:11&gt;N051 18.702
&lt;lon:11&gt;E004 27.147
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250228
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:11&gt;Diane Nuyts
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250228
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:24&gt;VIA UBA BUREAU OR DIRECT
&lt;qso_date:8&gt;20250228
&lt;qso_date_off:8&gt;20250228
&lt;qth:8&gt;Kapellen
&lt;rst_rcvd:2&gt;57
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1323
&lt;time_on:4&gt;1323
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1235770811
&lt;app_qrzlog_qsldate:8&gt;20250228
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;10m
&lt;band_rx:3&gt;10m
&lt;call:6&gt;EP4IRN
&lt;cont:2&gt;AS
&lt;country:4&gt;Iran
&lt;cqz:2&gt;21
&lt;distance:4&gt;2439
&lt;dxcc:3&gt;330
&lt;email:16&gt;ep4irn@yahoo.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:4&gt;28.4
&lt;freq_rx:4&gt;28.4
&lt;gridsquare:6&gt;LM38dc
&lt;ituz:2&gt;40
&lt;lat:11&gt;N038 05.176
&lt;lon:11&gt;E046 17.989
&lt;lotw_qsl_rcvd:1&gt;Y
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslrdate:8&gt;20250301
&lt;lotw_qslsdate:8&gt;20250228
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:11&gt;Reza Karimi
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250228
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250228
&lt;qso_date_off:8&gt;20250228
&lt;qth:6&gt;Tabriz
&lt;rst_rcvd:2&gt;58
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1516
&lt;time_on:4&gt;1516
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_lotw_modegroup:5&gt;PHONE
&lt;app_lotw_my_dxcc_entity_status:7&gt;Current
&lt;app_lotw_owncall:6&gt;HA7NCS
&lt;app_lotw_qso_timestamp:20&gt;2025-02-28T13:23:00Z
&lt;app_lotw_rxqso:19&gt;2025-02-28 13:24:06
&lt;app_qrzlog_logid:10&gt;1235772163
&lt;app_qrzlog_status:1&gt;N
&lt;band:3&gt;20M
&lt;band_rx:3&gt;20M
&lt;call:5&gt;ON5DL
&lt;cont:2&gt;EU
&lt;country:7&gt;Belgium
&lt;distance:4&gt;1318
&lt;dxcc:3&gt;209
&lt;email:21&gt;luc-duchateau@live.fr
&lt;freq:6&gt;14.254
&lt;freq_rx:6&gt;14.254
&lt;gridsquare:6&gt;JN15cd
&lt;lat:11&gt;N045 08.700
&lt;lon:11&gt;E002 12.400
&lt;lotw_qsl_sent:1&gt;Y
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97MM
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:14&gt;Luc Duchateau.
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250228
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:32&gt;SEND NO TO BUREAU I'M ONLY E-QSL
&lt;qso_date:8&gt;20250228
&lt;qso_date_off:8&gt;20250228
&lt;qth:6&gt;Pleaux
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1323
&lt;time_on:4&gt;1323
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1236226662
&lt;app_qrzlog_status:1&gt;N
&lt;band:3&gt;15m
&lt;band_rx:3&gt;15m
&lt;call:5&gt;R4CBN
&lt;cont:2&gt;EU
&lt;country:6&gt;Russia
&lt;cqz:2&gt;16
&lt;dxcc:2&gt;54
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:5&gt;21.25
&lt;freq_rx:5&gt;21.25
&lt;ituz:2&gt;19
&lt;lat:11&gt;S000 00.000
&lt;lon:11&gt;W000 00.000
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250301
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250301
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250301
&lt;qso_date_off:8&gt;20250301
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;0922
&lt;time_on:4&gt;0922
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1236232755
&lt;app_qrzlog_qsldate:8&gt;20250301
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;10m
&lt;band_rx:3&gt;10m
&lt;call:5&gt;4L7ZS
&lt;cont:2&gt;AS
&lt;country:7&gt;Georgia
&lt;cqz:2&gt;21
&lt;distance:4&gt;2118
&lt;dxcc:2&gt;75
&lt;email:20&gt;shermadini@gmail.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;28.467
&lt;freq_rx:6&gt;28.467
&lt;gridsquare:6&gt;LN21ir
&lt;ituz:2&gt;29
&lt;lat:11&gt;N041 44.050
&lt;lon:11&gt;E044 43.435
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250301
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:16&gt;Zurab Shermadini
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250301
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250301
&lt;qso_date_off:8&gt;20250301
&lt;qth:7&gt;Tbilisi
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;0949
&lt;time_on:4&gt;0949
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1236481666
&lt;app_qrzlog_status:1&gt;N
&lt;band:3&gt;40m
&lt;band_rx:3&gt;40m
&lt;call:6&gt;IZ2QZH
&lt;cont:2&gt;EU
&lt;country:5&gt;Italy
&lt;distance:3&gt;807
&lt;dxcc:3&gt;248
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:5&gt;7.069
&lt;freq_rx:5&gt;7.069
&lt;gridsquare:6&gt;JN45jt
&lt;lat:11&gt;N045 48.700
&lt;lon:11&gt;E008 47.400
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250301
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:10&gt;Lorenzo L.
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250301
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250301
&lt;qso_date_off:8&gt;20250301
&lt;qth:14&gt;ALBIZZATE -VA-
&lt;rst_rcvd:2&gt;56
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;2031
&lt;time_on:4&gt;2031
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1236688799
&lt;app_qrzlog_qsldate:8&gt;20250302
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:7&gt;SP4AW/P
&lt;cont:2&gt;EU
&lt;country:6&gt;Poland
&lt;cqz:2&gt;15
&lt;distance:3&gt;547
&lt;dxcc:3&gt;269
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:4&gt;14.3
&lt;freq_rx:4&gt;14.3
&lt;gridsquare:6&gt;KO02mg
&lt;ituz:2&gt;28
&lt;lat:11&gt;N052 16.250
&lt;lon:11&gt;E021 02.500
&lt;lotw_qsl_rcvd:1&gt;Y
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslrdate:8&gt;20250302
&lt;lotw_qslsdate:8&gt;20250302
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:15&gt;Artur Wronowski
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250302
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:26&gt;QSL via LOTW, eQSL, bureau
&lt;qso_date:8&gt;20250302
&lt;qso_date_off:8&gt;20250302
&lt;qth:7&gt;Suwalki
&lt;rst_rcvd:2&gt;58
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;0901
&lt;time_on:4&gt;0901
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1236726433
&lt;app_qrzlog_status:1&gt;N
&lt;band:3&gt;15m
&lt;band_rx:3&gt;15m
&lt;call:5&gt;EF5CR
&lt;cont:2&gt;EU
&lt;country:5&gt;Spain
&lt;distance:4&gt;1743
&lt;dxcc:3&gt;281
&lt;email:34&gt;info@diplomagaiatasdecastellon.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:5&gt;21.26
&lt;freq_rx:5&gt;21.26
&lt;gridsquare:6&gt;IM99xx
&lt;ituz:2&gt;37
&lt;lat:11&gt;N039 59.216
&lt;lon:11&gt;W000 02.918
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250302
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:30&gt;Diploma Gaiatas de Castellón 
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250302
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:18&gt;VIA BURO or EA5RKD
&lt;qso_date:8&gt;20250302
&lt;qso_date_off:8&gt;20250302
&lt;qth:21&gt;Castellon de la Plana
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1040
&lt;time_on:4&gt;1040
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1236731584
&lt;app_qrzlog_qsldate:8&gt;20250302
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;15m
&lt;band_rx:3&gt;15m
&lt;call:5&gt;LB8TG
&lt;cont:2&gt;EU
&lt;country:6&gt;Norway
&lt;cqz:1&gt;4
&lt;distance:4&gt;1454
&lt;dxcc:3&gt;266
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:5&gt;21.28
&lt;freq_rx:5&gt;21.28
&lt;gridsquare:6&gt;JO69cx
&lt;ituz:1&gt;4
&lt;lat:11&gt;N059 58.208
&lt;lon:11&gt;E012 13.090
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250302
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:13&gt;Gerard Tuitel
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250302
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250302
&lt;qso_date_off:8&gt;20250302
&lt;qth:7&gt;Hedmark
&lt;rst_rcvd:2&gt;58
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1050
&lt;time_on:4&gt;1050
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1236734996
&lt;app_qrzlog_qsldate:8&gt;20250303
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;10m
&lt;band_rx:3&gt;10m
&lt;call:6&gt;EA5JGQ
&lt;cont:2&gt;EU
&lt;country:5&gt;Spain
&lt;cqz:2&gt;14
&lt;distance:4&gt;1979
&lt;dxcc:3&gt;281
&lt;email:16&gt;ea5jgq@gmail.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;28.465
&lt;freq_rx:6&gt;28.465
&lt;gridsquare:6&gt;IN80dj
&lt;ituz:2&gt;37
&lt;lat:11&gt;N040 23.750
&lt;lon:11&gt;W003 42.500
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250303
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:15&gt;Rubén Sánchez
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250302
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:6&gt;BUREAU
&lt;qso_date:8&gt;20250302
&lt;qso_date_off:8&gt;20250302
&lt;qth:8&gt;Valencia
&lt;rst_rcvd:2&gt;54
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1100
&lt;time_on:4&gt;1100
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1237655790
&lt;app_qrzlog_status:1&gt;N
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:4&gt;R5EC
&lt;cont:2&gt;EU
&lt;country:6&gt;Russia
&lt;cqz:2&gt;16
&lt;distance:4&gt;1353
&lt;dxcc:2&gt;54
&lt;email:16&gt;rv3efr@yandex.ru
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;14.257
&lt;freq_rx:6&gt;14.257
&lt;gridsquare:6&gt;KO82ct
&lt;ituz:2&gt;29
&lt;lat:11&gt;N052 49.599
&lt;lon:11&gt;E036 14.563
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250303
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:16&gt;Nikolay Tolkunov
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250303
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:16&gt;BUREAU or DIRECT
&lt;qso_date:8&gt;20250303
&lt;qso_date_off:8&gt;20250303
&lt;qth:36&gt;s. Stanovoy Kolodez, Obl. Orlovskaya
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;0634
&lt;time_on:4&gt;0634
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1237870499
&lt;app_qrzlog_qsldate:8&gt;20250304
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:6&gt;YL400L
&lt;cont:2&gt;EU
&lt;country:6&gt;Latvia
&lt;cqz:2&gt;15
&lt;distance:4&gt;1056
&lt;dxcc:3&gt;145
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;14.197
&lt;freq_rx:6&gt;14.197
&lt;gridsquare:6&gt;KO06fx
&lt;ituz:2&gt;29
&lt;lat:11&gt;N056 58.752
&lt;lon:11&gt;E020 27.480
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250304
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:13&gt;Janis Bruders
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250303
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:51&gt;QRZ.com, LOTW and QSL-SERVICES, after end of event.
&lt;qso_date:8&gt;20250303
&lt;qso_date_off:8&gt;20250303
&lt;qth:7&gt;Liepaja
&lt;rst_rcvd:2&gt;57
&lt;rst_sent:2&gt;57
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1648
&lt;time_on:4&gt;1648
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1237936474
&lt;app_qrzlog_status:1&gt;N
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:5&gt;M3ZLA
&lt;comment:211&gt;Some terrible QSB occured in the moment I called you, and although you heard me all right, I your signal dropped from 59 to 53. Once we finished it went up again. Tough luck. Maybe next time. Thanks for the QSO!
&lt;cont:2&gt;EU
&lt;country:7&gt;England
&lt;distance:4&gt;1669
&lt;dxcc:3&gt;223
&lt;email:23&gt;glynburrows02@gmail.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;14.275
&lt;freq_rx:6&gt;14.275
&lt;gridsquare:6&gt;IO83nd
&lt;lat:11&gt;N053 09.753
&lt;lon:11&gt;W002 50.332
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250303
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:12&gt;Glyn Burrows
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250303
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250303
&lt;qso_date_off:8&gt;20250303
&lt;qth:8&gt;Cheshire
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;53
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1736
&lt;time_on:4&gt;1736
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1238218996
&lt;app_qrzlog_status:1&gt;N
&lt;band:3&gt;40m
&lt;band_rx:3&gt;40m
&lt;call:6&gt;SP8IOV
&lt;cont:2&gt;EU
&lt;country:6&gt;Poland
&lt;cqz:2&gt;15
&lt;distance:3&gt;579
&lt;dxcc:3&gt;269
&lt;email:16&gt;adammyrcha@wp.pl
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:5&gt;7.165
&lt;freq_rx:5&gt;7.165
&lt;gridsquare:6&gt;KO12na
&lt;ituz:2&gt;28
&lt;lat:11&gt;N052 01.200
&lt;lon:11&gt;E023 07.400
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250304
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:11&gt;Adam Myrcha
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250304
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:17&gt;E-QSL,direct,Lotw
&lt;qso_date:8&gt;20250304
&lt;qso_date_off:8&gt;20250304
&lt;qth:15&gt;Biała Podlaska
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;0624
&lt;time_on:4&gt;0624
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1238219537
&lt;app_qrzlog_qsldate:8&gt;20250304
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;40m
&lt;band_rx:3&gt;40m
&lt;call:6&gt;IV3WTJ
&lt;comment:50&gt;Seems like we are making contacts every other day!
&lt;cont:2&gt;EU
&lt;country:5&gt;Italy
&lt;cqz:1&gt;3
&lt;distance:3&gt;476
&lt;dxcc:3&gt;248
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:4&gt;7.19
&lt;freq_rx:4&gt;7.19
&lt;gridsquare:6&gt;JN66ne
&lt;ituz:1&gt;3
&lt;lat:11&gt;N046 11.200
&lt;lon:11&gt;E013 07.400
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250304
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:10&gt;ALBERTO A.
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250304
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250304
&lt;qso_date_off:8&gt;20250304
&lt;qth:5&gt;UDINE
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;0628
&lt;time_on:4&gt;0628
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1238420167
&lt;app_qrzlog_status:1&gt;2
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:5&gt;EA3KE
&lt;comment:23&gt;nice to meet you again!
&lt;cont:2&gt;EU
&lt;country:5&gt;Spain
&lt;cqz:2&gt;14
&lt;distance:4&gt;1643
&lt;dxcc:3&gt;281
&lt;email:20&gt;necktoni@hotmail.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;14.266
&lt;freq_rx:6&gt;14.266
&lt;gridsquare:6&gt;JN00ir
&lt;ituz:2&gt;37
&lt;lat:11&gt;N040 43.094
&lt;lon:11&gt;E000 43.566
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250304
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:16&gt;Toni Olmo Tomàs
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250304
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:16&gt;BUREAU OR DIRECT
&lt;qso_date:8&gt;20250304
&lt;qso_date_off:8&gt;20250304
&lt;qth:20&gt;Deltebre (Tarragona)
&lt;rst_rcvd:2&gt;58
&lt;rst_sent:2&gt;57
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1650
&lt;time_on:4&gt;1650
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1238429161
&lt;app_qrzlog_qsldate:8&gt;20250314
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:5&gt;DJ2RS
&lt;comment:66&gt;thanks for the very encouraging discussion. i hope to learn a lot!
&lt;cont:2&gt;EU
&lt;country:7&gt;Germany
&lt;cqz:2&gt;14
&lt;distance:4&gt;1008
&lt;dxcc:3&gt;230
&lt;email:12&gt;dj2rs@gmx.de
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;14.192
&lt;freq_rx:6&gt;14.192
&lt;gridsquare:6&gt;JO44rh
&lt;ituz:2&gt;28
&lt;lat:11&gt;N054 17.719
&lt;lon:11&gt;E009 29.740
&lt;lotw_qsl_rcvd:1&gt;Y
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslrdate:8&gt;20250304
&lt;lotw_qslsdate:8&gt;20250304
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:12&gt;Rainer Storm
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250304
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:54&gt;LotW please only, strictly no qrz.com or eqsl - thanks
&lt;qso_date:8&gt;20250304
&lt;qso_date_off:8&gt;20250304
&lt;qth:10&gt;24806 Hohn
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1719
&lt;time_on:4&gt;1719
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1238433524
&lt;app_qrzlog_status:1&gt;S
&lt;band:3&gt;15m
&lt;band_rx:3&gt;15m
&lt;call:5&gt;M7SZY
&lt;comment:38&gt;congrats on your vertical and the 25w!
&lt;cont:2&gt;EU
&lt;country:7&gt;England
&lt;cqz:2&gt;14
&lt;distance:4&gt;1683
&lt;dxcc:3&gt;223
&lt;email:25&gt;szymanski.marek@yahoo.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;21.288
&lt;freq_rx:6&gt;21.288
&lt;gridsquare:6&gt;IO83mj
&lt;ituz:2&gt;27
&lt;lat:11&gt;N053 23.393
&lt;lon:11&gt;W002 58.638
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250304
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:15&gt;Marek Szymanski
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250304
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250304
&lt;qso_date_off:8&gt;20250304
&lt;qth:9&gt;LIVERPOOL
&lt;rst_rcvd:2&gt;58
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1733
&lt;time_on:4&gt;1733
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1238435059
&lt;app_qrzlog_status:1&gt;N
&lt;band:3&gt;15m
&lt;band_rx:3&gt;15m
&lt;call:5&gt;EF5PO
&lt;cont:2&gt;EU
&lt;country:5&gt;Spain
&lt;cqz:2&gt;14
&lt;distance:4&gt;1742
&lt;dxcc:3&gt;281
&lt;email:34&gt;info@diplomagaiatasdecastellon.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:5&gt;21.26
&lt;freq_rx:5&gt;21.26
&lt;gridsquare:6&gt;IM99xx
&lt;ituz:2&gt;37
&lt;lat:11&gt;N039 59.159
&lt;lon:11&gt;W000 02.248
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250304
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:30&gt;Diploma Gaiatas de Castellón 
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250304
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:18&gt;VIA BURO or EA5RKD
&lt;qso_date:8&gt;20250304
&lt;qso_date_off:8&gt;20250304
&lt;qth:21&gt;Castellon de la Plana
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1737
&lt;time_on:4&gt;1737
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1239070726
&lt;app_qrzlog_status:1&gt;2
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:5&gt;A47RS
&lt;cont:2&gt;AS
&lt;country:4&gt;Oman
&lt;cqz:2&gt;21
&lt;distance:4&gt;4365
&lt;dxcc:3&gt;370
&lt;email:19&gt;qsl.a47rs@gmail.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;14.283
&lt;freq_rx:6&gt;14.283
&lt;gridsquare:6&gt;LL93eo
&lt;ituz:2&gt;39
&lt;lat:11&gt;N023 36.115
&lt;lon:11&gt;E058 20.955
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250305
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:48&gt;Clubstation of Royal Omani Amateur Radio Society
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250305
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:20&gt;VIA BUREAU OR DIRECT
&lt;qso_date:8&gt;20250305
&lt;qso_date_off:8&gt;20250305
&lt;qth:10&gt;Muscat 113
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;53
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1856
&lt;time_on:4&gt;1856
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1239076521
&lt;app_qrzlog_status:1&gt;2
&lt;band:3&gt;40m
&lt;band_rx:3&gt;40m
&lt;call:6&gt;SP9MQA
&lt;cont:2&gt;EU
&lt;country:6&gt;Poland
&lt;cqz:2&gt;15
&lt;distance:3&gt;545
&lt;dxcc:3&gt;269
&lt;email:29&gt;dariusz.adamczyk@aksel.com.pl
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:5&gt;7.162
&lt;freq_rx:5&gt;7.162
&lt;gridsquare:6&gt;jo90gc
&lt;ituz:2&gt;28
&lt;lat:11&gt;N052 15.283
&lt;lon:11&gt;E021 02.988
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250305
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:16&gt;DARIUSZ ADAMCZYK
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250305
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250305
&lt;qso_date_off:8&gt;20250305
&lt;qth:13&gt;RYBNIK 44-217
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1919
&lt;time_on:4&gt;1919
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1239258696
&lt;app_qrzlog_status:1&gt;2
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:5&gt;ON9DJ
&lt;comment:48&gt;Thanks for the tips on how to work with Oceania.
&lt;cont:2&gt;EU
&lt;country:7&gt;Belgium
&lt;cqz:2&gt;14
&lt;distance:4&gt;1131
&lt;dxcc:3&gt;209
&lt;email:23&gt;dieter.on3dmr@gmail.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;14.281
&lt;freq_rx:6&gt;14.281
&lt;gridsquare:8&gt;JO21FE50
&lt;ituz:2&gt;27
&lt;lat:11&gt;N051 10.110
&lt;lon:11&gt;E004 28.000
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250306
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:13&gt;Dieter Jacobs
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250306
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250306
&lt;qso_date_off:8&gt;20250306
&lt;qth:16&gt;Mortsel- Antwerp
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;0622
&lt;time_on:4&gt;0622
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1239301310
&lt;app_qrzlog_status:1&gt;2
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:6&gt;LA6GIA
&lt;cont:2&gt;EU
&lt;country:6&gt;Norway
&lt;cqz:2&gt;14
&lt;distance:4&gt;1409
&lt;dxcc:3&gt;266
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;14.281
&lt;freq_rx:6&gt;14.281
&lt;gridsquare:6&gt;JO59mg
&lt;ituz:2&gt;18
&lt;lat:11&gt;N059 16.200
&lt;lon:11&gt;E011 02.400
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250306
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:14&gt;Hernan Serrano
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250306
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:7&gt;eQSL.cc
&lt;qso_date:8&gt;20250306
&lt;qso_date_off:8&gt;20250306
&lt;qth:19&gt;1739 - BORGENHAUGEN
&lt;rst_rcvd:2&gt;57
&lt;rst_sent:2&gt;57
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;0641
&lt;time_on:4&gt;0641
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1239332802
&lt;app_qrzlog_qsldate:8&gt;20250306
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:6&gt;IZ7DOK
&lt;cont:2&gt;EU
&lt;country:5&gt;Italy
&lt;cqz:2&gt;15
&lt;distance:3&gt;802
&lt;dxcc:3&gt;248
&lt;email:16&gt;iz7dok@libero.it
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;14.264
&lt;freq_rx:6&gt;14.264
&lt;gridsquare:6&gt;JN90ch
&lt;ituz:2&gt;28
&lt;lat:11&gt;N040 19.990
&lt;lon:11&gt;E018 10.030
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250306
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:14&gt;MARCO DE CARLO
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250306
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250306
&lt;qso_date_off:8&gt;20250306
&lt;qth:11&gt;73100 LECCE
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;58
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;0650
&lt;time_on:4&gt;0650
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1239530124
&lt;app_qrzlog_status:1&gt;2
&lt;band:3&gt;10m
&lt;band_rx:3&gt;10m
&lt;call:5&gt;4X5LL
&lt;cont:2&gt;AS
&lt;country:6&gt;Israel
&lt;cqz:2&gt;20
&lt;distance:4&gt;2246
&lt;dxcc:3&gt;336
&lt;email:22&gt;yuriygorobey@gmail.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;28.495
&lt;freq_rx:6&gt;28.495
&lt;gridsquare:6&gt;KM71jg
&lt;ituz:2&gt;39
&lt;lat:11&gt;N031 16.200
&lt;lon:11&gt;E034 47.400
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250306
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:16&gt;Yuriy Y. Gorobey
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250306
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250306
&lt;qso_date_off:8&gt;20250306
&lt;qth:12&gt;Be'er- Sheva
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1106
&lt;time_on:4&gt;1106
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1239603301
&lt;app_qrzlog_qsldate:8&gt;20250306
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;15m
&lt;band_rx:3&gt;15m
&lt;call:5&gt;4X6HU
&lt;cont:2&gt;AS
&lt;country:6&gt;Israel
&lt;cqz:2&gt;20
&lt;distance:4&gt;2175
&lt;dxcc:3&gt;336
&lt;email:17&gt;4x6hu73@gmail.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;21.217
&lt;freq_rx:6&gt;21.217
&lt;gridsquare:8&gt;KM72JA02
&lt;ituz:2&gt;39
&lt;lat:11&gt;N032 00.519
&lt;lon:11&gt;E034 45.052
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250306
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:15&gt;RAMI SZTERNFELD
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250306
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:4&gt;rami
&lt;qso_date:8&gt;20250306
&lt;qso_date_off:8&gt;20250306
&lt;qth:7&gt;BAT-YAM
&lt;rst_rcvd:2&gt;57
&lt;rst_sent:2&gt;53
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1451
&lt;time_on:4&gt;1451
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1239611052
&lt;app_qrzlog_qsldate:8&gt;20250308
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;15m
&lt;band_rx:3&gt;15m
&lt;call:5&gt;G0CMQ
&lt;cont:2&gt;EU
&lt;country:7&gt;England
&lt;cqz:2&gt;14
&lt;distance:4&gt;1643
&lt;dxcc:3&gt;223
&lt;email:20&gt;markward34@gmail.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;21.265
&lt;freq_rx:6&gt;21.265
&lt;gridsquare:6&gt;IO83vq
&lt;ituz:2&gt;27
&lt;lat:11&gt;N053 41.250
&lt;lon:11&gt;W002 12.480
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250306
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:9&gt;MARK WARD
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250306
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:4&gt;eQSL
&lt;qso_date:8&gt;20250306
&lt;qso_date_off:8&gt;20250306
&lt;qth:17&gt;Rossendale valley
&lt;rst_rcvd:2&gt;53
&lt;rst_sent:2&gt;53
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1527
&lt;time_on:4&gt;1527
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1239615896
&lt;app_qrzlog_qsldate:8&gt;20250306
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;15m
&lt;band_rx:3&gt;15m
&lt;call:5&gt;G1THW
&lt;comment:49&gt;YAY! The first station who ever reacted to my CQ!
&lt;cont:2&gt;EU
&lt;country:7&gt;England
&lt;cqz:2&gt;14
&lt;distance:4&gt;1456
&lt;dxcc:3&gt;223
&lt;email:21&gt;paul@5brookside.co.uk
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:5&gt;21.25
&lt;freq_rx:5&gt;21.25
&lt;gridsquare:6&gt;IO91UE
&lt;ituz:2&gt;27
&lt;lat:11&gt;N051 11.250
&lt;lon:11&gt;W000 17.520
&lt;lotw_qsl_rcvd:1&gt;Y
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslrdate:8&gt;20250306
&lt;lotw_qslsdate:8&gt;20250306
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:11&gt;Paul TAYLOR
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250306
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250306
&lt;qso_date_off:8&gt;20250306
&lt;qth:20&gt;Beare Green, Dorking
&lt;rst_rcvd:2&gt;47
&lt;rst_sent:2&gt;53
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1551
&lt;time_on:4&gt;1551
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1239618139
&lt;app_qrzlog_qsldate:8&gt;20250306
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:6&gt;YL400L
&lt;cont:2&gt;EU
&lt;country:6&gt;Latvia
&lt;cqz:2&gt;15
&lt;distance:4&gt;1010
&lt;dxcc:3&gt;145
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;14.218
&lt;freq_rx:6&gt;14.218
&lt;gridsquare:6&gt;KO06mm
&lt;ituz:2&gt;29
&lt;lat:11&gt;N056 31.200
&lt;lon:11&gt;E021 02.400
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250306
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:13&gt;Janis Bruders
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250306
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:51&gt;QRZ.com, LOTW and QSL-SERVICES, after end of event.
&lt;qso_date:8&gt;20250306
&lt;qso_date_off:8&gt;20250306
&lt;qth:7&gt;Liepaja
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1601
&lt;time_on:4&gt;1601
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1239619728
&lt;app_qrzlog_status:1&gt;2
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:6&gt;OH6LHB
&lt;comment:27&gt;First contact from Finland!
&lt;cont:2&gt;EU
&lt;country:7&gt;Finland
&lt;cqz:2&gt;15
&lt;distance:4&gt;1737
&lt;dxcc:3&gt;224
&lt;email:14&gt;oh6lhb@sral.fi
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;14.293
&lt;freq_rx:6&gt;14.293
&lt;gridsquare:6&gt;KP12MX
&lt;ituz:2&gt;18
&lt;lat:11&gt;N062 58.752
&lt;lon:11&gt;E023 02.520
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250306
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:10&gt;KARI SILLA
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250306
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:63&gt;Electronic QSL via http://www.eqsl.cc or QSL through the bureau
&lt;qso_date:8&gt;20250306
&lt;qso_date_off:8&gt;20250306
&lt;qth:11&gt;62100 LAPUA
&lt;rst_rcvd:2&gt;57
&lt;rst_sent:2&gt;57
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1607
&lt;time_on:4&gt;1607
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1239629869
&lt;app_qrzlog_qsldate:8&gt;20250307
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:4&gt;TA0C
&lt;comment:42&gt;Thank you! Super strong signal from Turkey
&lt;cont:2&gt;AS
&lt;country:6&gt;Turkey
&lt;cqz:2&gt;20
&lt;distance:4&gt;1090
&lt;dxcc:3&gt;390
&lt;email:19&gt;blntaytop@gmail.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;14.264
&lt;freq_rx:6&gt;14.264
&lt;gridsquare:6&gt;KN40nu
&lt;iota:6&gt;AS-201
&lt;ituz:2&gt;39
&lt;lat:11&gt;N040 50.647
&lt;lon:11&gt;E029 06.947
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250306
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:12&gt;BULENT AYTOP
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250306
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250306
&lt;qso_date_off:8&gt;20250306
&lt;qth:16&gt;Istanbul TURKIYE
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;58
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1629
&lt;time_on:4&gt;1629
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1239632183
&lt;app_qrzlog_qsldate:8&gt;20250306
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:6&gt;DK6VCO
&lt;cont:2&gt;EU
&lt;country:7&gt;Germany
&lt;cqz:2&gt;14
&lt;distance:4&gt;1038
&lt;dxcc:3&gt;230
&lt;email:14&gt;dk6vco@darc.de
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;14.247
&lt;freq_rx:6&gt;14.247
&lt;gridsquare:6&gt;JO33tj
&lt;ituz:2&gt;28
&lt;lat:11&gt;N053 23.602
&lt;lon:11&gt;E007 38.255
&lt;lotw_qsl_rcvd:1&gt;Y
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslrdate:8&gt;20250306
&lt;lotw_qslsdate:8&gt;20250306
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:16&gt;Thorsten Reiners
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250306
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:30&gt;EQSL.CC / DIRECT / BUREAU/Lotw
&lt;qso_date:8&gt;20250306
&lt;qso_date_off:8&gt;20250306
&lt;qth:16&gt;26629 Grossefehn
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1634
&lt;time_on:4&gt;1634
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1239957182
&lt;app_qrzlog_status:1&gt;N
&lt;band:3&gt;15m
&lt;band_rx:3&gt;15m
&lt;call:8&gt;OH6JUM/P
&lt;cont:2&gt;EU
&lt;country:7&gt;Finland
&lt;cqz:2&gt;15
&lt;dxcc:3&gt;224
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;21.254
&lt;freq_rx:6&gt;21.254
&lt;ituz:2&gt;18
&lt;lat:11&gt;S000 00.000
&lt;lon:11&gt;W000 00.000
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250307
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250307
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250307
&lt;qso_date_off:8&gt;20250307
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1312
&lt;time_on:4&gt;1312
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1239958586
&lt;app_qrzlog_qsldate:8&gt;20250309
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:6&gt;DL4DBM
&lt;cont:2&gt;EU
&lt;country:7&gt;Germany
&lt;cqz:2&gt;14
&lt;distance:3&gt;946
&lt;dxcc:3&gt;230
&lt;email:17&gt;herrk04@gmail.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;14.327
&lt;freq_rx:6&gt;14.327
&lt;gridsquare:8&gt;JO31QI55
&lt;ituz:2&gt;28
&lt;lat:11&gt;N051 21.250
&lt;lon:11&gt;E007 22.500
&lt;lotw_qsl_rcvd:1&gt;Y
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslrdate:8&gt;20250309
&lt;lotw_qslsdate:8&gt;20250307
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:20&gt;Bernd (Ben) Kruschat
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250307
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:21&gt;VIA PA3CLP OR DIRECT!
&lt;qso_date:8&gt;20250307
&lt;qso_date_off:8&gt;20250307
&lt;qth:21&gt;Wetter (Ruhr, D-58300
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;58
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1319
&lt;time_on:4&gt;1319
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1240049465
&lt;app_qrzlog_status:1&gt;2
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:7&gt;OH73ELK
&lt;cont:2&gt;EU
&lt;country:7&gt;Finland
&lt;cqz:2&gt;15
&lt;distance:4&gt;1757
&lt;dxcc:3&gt;224
&lt;email:17&gt;OH73ELK@gmail.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;14.315
&lt;freq_rx:6&gt;14.315
&lt;gridsquare:6&gt;KP42ng
&lt;ituz:2&gt;18
&lt;lat:11&gt;N062 16.200
&lt;lon:11&gt;E029 07.400
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250307
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:12&gt;OH73ELK team
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250307
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:14&gt;DIRECT, BUREAU
&lt;qso_date:8&gt;20250307
&lt;qso_date_off:8&gt;20250307
&lt;qth:10&gt;Savonlinna
&lt;rst_rcvd:2&gt;57
&lt;rst_sent:2&gt;58
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1427
&lt;time_on:4&gt;1427
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1240089969
&lt;app_qrzlog_qsldate:8&gt;20250310
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;15m
&lt;band_rx:3&gt;15m
&lt;call:6&gt;GW0SOO
&lt;cont:2&gt;EU
&lt;country:5&gt;Wales
&lt;cqz:2&gt;14
&lt;distance:4&gt;1714
&lt;dxcc:3&gt;294
&lt;email:25&gt;peteantliff@hotmail.co.uk
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;21.226
&lt;freq_rx:6&gt;21.226
&lt;gridsquare:8&gt;IO81AT92
&lt;ituz:2&gt;27
&lt;lat:11&gt;N051 48.240
&lt;lon:11&gt;W003 55.380
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250307
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:15&gt;Peter J Antliff
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250307
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:11&gt;Via bureau 
&lt;qso_date:8&gt;20250307
&lt;qso_date_off:8&gt;20250307
&lt;qth:9&gt;Glanamman
&lt;rst_rcvd:2&gt;55
&lt;rst_sent:2&gt;55
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1656
&lt;time_on:4&gt;1656
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1240090551
&lt;app_qrzlog_qsldate:8&gt;20250307
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;15m
&lt;band_rx:3&gt;15m
&lt;call:6&gt;HA3MAR
&lt;cont:2&gt;EU
&lt;country:7&gt;Hungary
&lt;cqz:2&gt;15
&lt;distance:1&gt;4
&lt;dxcc:3&gt;239
&lt;email:16&gt;ha3mar@gmail.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;21.284
&lt;freq_rx:6&gt;21.284
&lt;gridsquare:6&gt;JN97ml
&lt;ituz:2&gt;28
&lt;lat:11&gt;N047 29.806
&lt;lon:11&gt;E019 01.927
&lt;lotw_qsl_rcvd:1&gt;Y
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslrdate:8&gt;20250307
&lt;lotw_qslsdate:8&gt;20250307
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:13&gt;Marcell Nemes
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250307
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:6&gt;Direkt
&lt;qso_date:8&gt;20250307
&lt;qso_date_off:8&gt;20250307
&lt;qth:8&gt;Budapest
&lt;rst_rcvd:2&gt;44
&lt;rst_sent:2&gt;56
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1659
&lt;time_on:4&gt;1659
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1240097973
&lt;app_qrzlog_status:1&gt;N
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:4&gt;RC6N
&lt;cont:2&gt;EU
&lt;country:6&gt;Russia
&lt;cqz:2&gt;16
&lt;dxcc:2&gt;54
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;14.186
&lt;freq_rx:6&gt;14.186
&lt;ituz:2&gt;19
&lt;lat:11&gt;S000 00.000
&lt;lon:11&gt;W000 00.000
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250307
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250307
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250307
&lt;qso_date_off:8&gt;20250307
&lt;rst_rcvd:2&gt;58
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1714
&lt;time_on:4&gt;1714
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1240124848
&lt;app_qrzlog_status:1&gt;N
&lt;band:3&gt;40m
&lt;band_rx:3&gt;40m
&lt;call:6&gt;IR0IDP
&lt;cont:2&gt;EU
&lt;country:8&gt;Sardinia
&lt;distance:4&gt;1223
&lt;dxcc:3&gt;225
&lt;email:19&gt;pnonnis48@gmail.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:5&gt;7.167
&lt;freq_rx:5&gt;7.167
&lt;gridsquare:6&gt;JM49ne
&lt;iota:6&gt;EU-024
&lt;ituz:2&gt;28
&lt;lat:11&gt;N039 11.623
&lt;lon:11&gt;E009 08.793
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250307
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:54&gt;Italian Navy Coastal Radio Station - Maritele Cagliari
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250307
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:10&gt;Via IS0KEW
&lt;qso_date:8&gt;20250307
&lt;qso_date_off:8&gt;20250307
&lt;qth:8&gt;Cagliari
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1723
&lt;time_on:4&gt;1723
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1240165529
&lt;app_qrzlog_status:1&gt;N
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:6&gt;IR0IDP
&lt;cont:2&gt;EU
&lt;country:8&gt;Sardinia
&lt;distance:4&gt;1223
&lt;dxcc:3&gt;225
&lt;email:19&gt;pnonnis48@gmail.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;14.265
&lt;freq_rx:6&gt;14.265
&lt;gridsquare:6&gt;JM49ne
&lt;iota:6&gt;EU-024
&lt;ituz:2&gt;28
&lt;lat:11&gt;N039 11.623
&lt;lon:11&gt;E009 08.793
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250307
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:54&gt;Italian Navy Coastal Radio Station - Maritele Cagliari
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250307
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:10&gt;Via IS0KEW
&lt;qso_date:8&gt;20250307
&lt;qso_date_off:8&gt;20250307
&lt;qth:8&gt;Cagliari
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;58
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1742
&lt;time_on:4&gt;1742
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1240201785
&lt;app_qrzlog_qsldate:8&gt;20250307
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:5&gt;F4JGI
&lt;cont:2&gt;EU
&lt;country:6&gt;France
&lt;cqz:1&gt;1
&lt;distance:4&gt;1540
&lt;dxcc:3&gt;227
&lt;email:22&gt;f4jgi.cedric@gmail.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;14.244
&lt;freq_rx:6&gt;14.244
&lt;gridsquare:6&gt;IN94rq
&lt;ituz:1&gt;1
&lt;lat:11&gt;N044 41.250
&lt;lon:11&gt;W000 32.520
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250307
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:7&gt;Cedric 
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250307
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250307
&lt;qso_date_off:8&gt;20250307
&lt;qth:8&gt;Bordeaux
&lt;rst_rcvd:2&gt;58
&lt;rst_sent:2&gt;58
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1958
&lt;time_on:4&gt;1958
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1240207714
&lt;app_qrzlog_qsldate:8&gt;20250307
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:5&gt;4X6HU
&lt;cont:2&gt;AS
&lt;country:6&gt;Israel
&lt;cqz:2&gt;20
&lt;distance:4&gt;2175
&lt;dxcc:3&gt;336
&lt;email:17&gt;4x6hu73@gmail.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;14.228
&lt;freq_rx:6&gt;14.228
&lt;gridsquare:8&gt;KM72JA02
&lt;ituz:2&gt;39
&lt;lat:11&gt;N032 00.519
&lt;lon:11&gt;E034 45.052
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250307
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:15&gt;RAMI SZTERNFELD
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250307
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:4&gt;rami
&lt;qso_date:8&gt;20250307
&lt;qso_date_off:8&gt;20250307
&lt;qth:7&gt;BAT-YAM
&lt;rst_rcvd:2&gt;57
&lt;rst_sent:2&gt;57
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;2015
&lt;time_on:4&gt;2015
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1240218282
&lt;app_qrzlog_status:1&gt;N
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:4&gt;OY1R
&lt;comment:200&gt;Thank you for the quick QSO! I just started HAM radio 3-4 weeks ago. This is my second time to talk to someone in Faroe Islands, and the first time that I could actually understand the other side :)  
&lt;cont:2&gt;EU
&lt;country:13&gt;Faroe Islands
&lt;cqz:2&gt;14
&lt;distance:4&gt;2280
&lt;dxcc:3&gt;222
&lt;email:23&gt;dreamglider82@gmail.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:5&gt;14.27
&lt;freq_rx:5&gt;14.27
&lt;gridsquare:6&gt;IP61nv
&lt;iota:6&gt;EU-018
&lt;ituz:2&gt;18
&lt;lat:11&gt;N061 53.613
&lt;lon:11&gt;W006 52.332
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250307
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:16&gt;Regin Nicolajsen
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250307
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:39&gt;Forbthe time being only lotw - no tf4/8
&lt;qso_date:8&gt;20250307
&lt;qso_date_off:8&gt;20250307
&lt;qth:6&gt;Skopun
&lt;rst_rcvd:2&gt;55
&lt;rst_sent:2&gt;57
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;2056
&lt;time_on:4&gt;2056
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1240220207
&lt;app_qrzlog_qsldate:8&gt;20250309
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:5&gt;JY4CI
&lt;comment:79&gt;Sorry for being a bit dizzy today, IDK... maybe I'm sleepy. Thanks for the QSO!
&lt;cont:2&gt;AS
&lt;country:6&gt;Jordan
&lt;cqz:2&gt;20
&lt;distance:4&gt;2242
&lt;dxcc:3&gt;342
&lt;email:16&gt;jy4cia@gmail.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;14.242
&lt;freq_rx:6&gt;14.242
&lt;gridsquare:6&gt;KM71vv
&lt;ituz:2&gt;39
&lt;lat:11&gt;N031 53.574
&lt;lon:11&gt;E035 49.543
&lt;lotw_qsl_rcvd:1&gt;Y
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslrdate:8&gt;20250309
&lt;lotw_qslsdate:8&gt;20250307
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:13&gt;RAFIQ FARMAWI
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250307
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:18&gt;QSL DIRECT TO K2AX
&lt;qso_date:8&gt;20250307
&lt;qso_date_off:8&gt;20250307
&lt;qth:5&gt;AMMAN
&lt;rst_rcvd:2&gt;58
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;2105
&lt;time_on:4&gt;2105
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1240459322
&lt;app_qrzlog_qsldate:8&gt;20250308
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;15m
&lt;band_rx:3&gt;15m
&lt;call:5&gt;RV3FF
&lt;cont:2&gt;EU
&lt;country:6&gt;Russia
&lt;cqz:2&gt;16
&lt;distance:4&gt;1587
&lt;dxcc:2&gt;54
&lt;email:13&gt;rv3ff@mail.ru
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:5&gt;21.21
&lt;freq_rx:5&gt;21.21
&lt;gridsquare:6&gt;KO85wv
&lt;ituz:2&gt;29
&lt;lat:11&gt;N055 53.750
&lt;lon:11&gt;E037 52.500
&lt;lotw_qsl_rcvd:1&gt;Y
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslrdate:8&gt;20250308
&lt;lotw_qslsdate:8&gt;20250308
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:9&gt;Andrey B.
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250308
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:5&gt;RN3RQ
&lt;qso_date:8&gt;20250308
&lt;qso_date_off:8&gt;20250308
&lt;qth:25&gt;Moskovskaya obl, Korolyov
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;0839
&lt;time_on:4&gt;0839
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1240461383
&lt;app_qrzlog_status:1&gt;N
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:5&gt;F6HOR
&lt;cont:2&gt;EU
&lt;country:6&gt;France
&lt;cqz:2&gt;14
&lt;distance:3&gt;885
&lt;dxcc:3&gt;227
&lt;email:19&gt;r.sibold@calixo.net
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:5&gt;14.34
&lt;freq_rx:5&gt;14.34
&lt;gridsquare:6&gt;JN38oc
&lt;ituz:2&gt;27
&lt;lat:11&gt;N048 06.010
&lt;lon:11&gt;E007 14.110
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250308
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:13&gt;Roland SIBOLD
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250308
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:12&gt;QSL VIA BURO
&lt;qso_date:8&gt;20250308
&lt;qso_date_off:8&gt;20250308
&lt;qth:10&gt;Trois Epis
&lt;rst_rcvd:2&gt;57
&lt;rst_sent:2&gt;57
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;0848
&lt;time_on:4&gt;0848
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1240462760
&lt;app_qrzlog_status:1&gt;N
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:8&gt;LA1UTX/P
&lt;cont:2&gt;EU
&lt;country:6&gt;Norway
&lt;cqz:2&gt;14
&lt;dxcc:3&gt;266
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:5&gt;14.32
&lt;freq_rx:5&gt;14.32
&lt;ituz:2&gt;18
&lt;lat:11&gt;S000 00.000
&lt;lon:11&gt;W000 00.000
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250308
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250308
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250308
&lt;qso_date_off:8&gt;20250308
&lt;rst_rcvd:2&gt;57
&lt;rst_sent:2&gt;55
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;0855
&lt;time_on:4&gt;0855
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1240463132
&lt;app_qrzlog_status:1&gt;N
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:6&gt;II7ICT
&lt;cont:2&gt;EU
&lt;country:5&gt;Italy
&lt;distance:3&gt;797
&lt;dxcc:3&gt;248
&lt;email:16&gt;iz7auh@gmail.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;14.212
&lt;freq_rx:6&gt;14.212
&lt;gridsquare:6&gt;JN80ol
&lt;lat:11&gt;N040 28.332
&lt;lon:11&gt;E017 14.071
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250308
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:37&gt;COASTAL RADIO STATION MARITELE MI-600
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250308
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:44&gt;ONLY OQRS https/clublog.org/logsearch/II7ICT
&lt;qso_date:8&gt;20250308
&lt;qso_date_off:8&gt;20250308
&lt;qth:7&gt;TARANTO
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;0902
&lt;time_on:4&gt;0902
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1240465872
&lt;app_qrzlog_status:1&gt;N
&lt;band:3&gt;40m
&lt;band_rx:3&gt;40m
&lt;call:7&gt;OE65IPA
&lt;cont:2&gt;EU
&lt;country:7&gt;Austria
&lt;distance:3&gt;296
&lt;dxcc:3&gt;206
&lt;email:13&gt;oe3dma@gmx.at
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:5&gt;7.128
&lt;freq_rx:5&gt;7.128
&lt;gridsquare:6&gt;JN77nm
&lt;lat:11&gt;N047 31.250
&lt;lon:11&gt;E015 07.500
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250308
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:58&gt;65 years International Police Association Austrian Section
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250308
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:6&gt;OE3DMA
&lt;qso_date:8&gt;20250308
&lt;qso_date_off:8&gt;20250308
&lt;qth:9&gt;by OE3DMA
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;0917
&lt;time_on:4&gt;0917
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1240480398
&lt;app_qrzlog_status:1&gt;N
&lt;band:3&gt;40m
&lt;band_rx:3&gt;40m
&lt;call:5&gt;HA3ZG
&lt;cont:2&gt;EU
&lt;country:7&gt;Hungary
&lt;distance:1&gt;2
&lt;dxcc:3&gt;239
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:5&gt;7.093
&lt;freq_rx:5&gt;7.093
&lt;gridsquare:6&gt;JN97mm
&lt;lat:11&gt;N047 31.250
&lt;lon:11&gt;E019 02.500
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250308
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:14&gt;Zoltán Galamb
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250308
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250308
&lt;qso_date_off:8&gt;20250308
&lt;qth:13&gt;Komló - 7300
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;57
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;0931
&lt;time_on:4&gt;0931
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1240543167
&lt;app_qrzlog_qsldate:8&gt;20250308
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:6&gt;SQ1AJA
&lt;cont:2&gt;EU
&lt;country:6&gt;Poland
&lt;cqz:2&gt;15
&lt;distance:3&gt;732
&lt;dxcc:3&gt;269
&lt;email:16&gt;sq1aja@proton.me
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;14.291
&lt;freq_rx:6&gt;14.291
&lt;gridsquare:6&gt;JO73gk
&lt;iota:4&gt;none
&lt;ituz:2&gt;28
&lt;lat:11&gt;N053 26.250
&lt;lon:11&gt;E014 32.500
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250308
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:15&gt;Andrzej Jarocki
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250308
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:43&gt;LoTW and QSL bureau will be available later
&lt;qso_date:8&gt;20250308
&lt;qso_date_off:8&gt;20250308
&lt;qth:8&gt;Szczecin
&lt;rst_rcvd:2&gt;57
&lt;rst_sent:2&gt;57
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1430
&lt;time_on:4&gt;1430
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1240549171
&lt;app_qrzlog_status:1&gt;2
&lt;band:3&gt;15m
&lt;band_rx:3&gt;15m
&lt;call:5&gt;M3JDF
&lt;cont:2&gt;EU
&lt;country:7&gt;England
&lt;cqz:1&gt;1
&lt;distance:4&gt;1454
&lt;dxcc:3&gt;223
&lt;email:17&gt;m3jdf@outlook.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;21.245
&lt;freq_rx:6&gt;21.245
&lt;gridsquare:6&gt;IO91vl
&lt;ituz:1&gt;1
&lt;lat:11&gt;N051 29.704
&lt;lon:11&gt;W000 10.547
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250308
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:14&gt;Darren Feather
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250308
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250308
&lt;qso_date_off:8&gt;20250308
&lt;qth:9&gt;Rotherham
&lt;rst_rcvd:2&gt;55
&lt;rst_sent:2&gt;55
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1458
&lt;time_on:4&gt;1458
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1240549850
&lt;app_qrzlog_status:1&gt;2
&lt;band:3&gt;15m
&lt;band_rx:3&gt;15m
&lt;call:6&gt;WA2OAX
&lt;cnty:11&gt;NY,Sullivan
&lt;comment:265&gt;Thanks for working with me. You havent understood everything, I was trying to say that USA is on the edge of my reach with the limited setup I have. I...m a new operator, recently started with ham radio, and I have just an end fed wire that doesnt work well on 15m.
&lt;cont:2&gt;NA
&lt;country:13&gt;United States
&lt;cqz:1&gt;5
&lt;distance:4&gt;6969
&lt;dxcc:3&gt;291
&lt;email:16&gt;wa2oax@toast.net
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;21.234
&lt;freq_rx:6&gt;21.234
&lt;gridsquare:6&gt;FN21pv
&lt;ituz:1&gt;8
&lt;lat:11&gt;N041 53.864
&lt;lon:11&gt;W074 44.149
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250308
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:12&gt;Ira D Lipton
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250308
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:64&gt;DIRECT WITH RETURN ENVELOPE AND US POSTAGE OR CURRENCY. NO IRCS.
&lt;qso_date:8&gt;20250308
&lt;qso_date_off:8&gt;20250308
&lt;qth:7&gt;Liberty
&lt;rst_rcvd:2&gt;33
&lt;rst_sent:2&gt;55
&lt;state:2&gt;NY
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1502
&lt;time_on:4&gt;1502
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_lotw_modegroup:5&gt;PHONE
&lt;app_lotw_my_dxcc_entity_status:7&gt;Current
&lt;app_lotw_owncall:6&gt;HA7NCS
&lt;app_lotw_qso_timestamp:20&gt;2025-03-08T14:41:00Z
&lt;app_lotw_rxqso:19&gt;2025-03-08 14:42:11
&lt;app_qrzlog_logid:10&gt;1240643814
&lt;app_qrzlog_status:1&gt;2
&lt;band:3&gt;10M
&lt;band_rx:3&gt;10M
&lt;call:5&gt;4X5LL
&lt;cont:2&gt;AS
&lt;country:6&gt;Israel
&lt;cqz:2&gt;20
&lt;distance:4&gt;2246
&lt;dxcc:3&gt;336
&lt;email:22&gt;yuriygorobey@gmail.com
&lt;freq:6&gt;28.495
&lt;freq_rx:6&gt;28.495
&lt;gridsquare:6&gt;KM71jg
&lt;ituz:2&gt;39
&lt;lat:11&gt;N031 16.200
&lt;lon:11&gt;E034 47.400
&lt;lotw_qsl_sent:1&gt;Y
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97MM
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:16&gt;Yuriy Y. Gorobey
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250308
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250308
&lt;qso_date_off:8&gt;20250308
&lt;qth:12&gt;Be'er- Sheva
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1441
&lt;time_on:4&gt;1441
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1240823874
&lt;app_qrzlog_qsldate:8&gt;20250310
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;15m
&lt;band_rx:3&gt;15m
&lt;call:6&gt;JA8COE
&lt;comment:50&gt;Thanks a lot! You are my first contact from Japan.
&lt;cont:2&gt;AS
&lt;country:5&gt;Japan
&lt;cqz:2&gt;25
&lt;distance:4&gt;8452
&lt;dxcc:3&gt;339
&lt;email:15&gt;ja8coe@jarl.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:5&gt;21.28
&lt;freq_rx:5&gt;21.28
&lt;gridsquare:6&gt;QN13er
&lt;iota:6&gt;AS-078
&lt;ituz:2&gt;45
&lt;lat:11&gt;N043 44.339
&lt;lon:11&gt;E142 24.922
&lt;lotw_qsl_rcvd:1&gt;Y
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslrdate:8&gt;20250310
&lt;lotw_qslsdate:8&gt;20250309
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:22&gt;TAKA Masaaki Takahashi
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250309
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250309
&lt;qso_date_off:8&gt;20250309
&lt;qth:18&gt;Asahikawa Hokkaido
&lt;rst_rcvd:2&gt;57
&lt;rst_sent:2&gt;55
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;0730
&lt;time_on:4&gt;0730
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1240854895
&lt;app_qrzlog_status:1&gt;2
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:6&gt;IU7EHF
&lt;cont:2&gt;EU
&lt;country:5&gt;Italy
&lt;cqz:1&gt;1
&lt;distance:3&gt;770
&lt;dxcc:3&gt;248
&lt;email:16&gt;iu7ehf@gmail.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:5&gt;14.31
&lt;freq_rx:5&gt;14.31
&lt;gridsquare:8&gt;JN80UP48
&lt;ituz:2&gt;28
&lt;lat:11&gt;N040 39.625
&lt;lon:11&gt;E017 42.474
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250309
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:22&gt;ALESSIO RIBEZZI MR.ALE
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250309
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250309
&lt;qso_date_off:8&gt;20250309
&lt;qth:26&gt;San Vito Dei Normanni (Br)
&lt;rst_rcvd:2&gt;57
&lt;rst_sent:2&gt;55
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;0830
&lt;time_on:4&gt;0830
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1240857295
&lt;app_qrzlog_qsldate:8&gt;20250309
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:6&gt;IU8PDD
&lt;cont:2&gt;EU
&lt;country:5&gt;Italy
&lt;cqz:2&gt;15
&lt;distance:3&gt;750
&lt;dxcc:3&gt;248
&lt;email:19&gt;simodiss@hotmail.it
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;14.223
&lt;freq_rx:6&gt;14.223
&lt;gridsquare:6&gt;JN71in
&lt;ituz:2&gt;28
&lt;lat:11&gt;N041 32.668
&lt;lon:11&gt;E014 40.017
&lt;lotw_qsl_rcvd:1&gt;Y
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslrdate:8&gt;20250309
&lt;lotw_qslsdate:8&gt;20250309
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:16&gt;Simone Di Soccio
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250309
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:16&gt;BUREAU OR DIRECT
&lt;qso_date:8&gt;20250309
&lt;qso_date_off:8&gt;20250309
&lt;qth:10&gt;CAMPOBASSO
&lt;rst_rcvd:2&gt;53
&lt;rst_sent:2&gt;58
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;0840
&lt;time_on:4&gt;0840
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1240858283
&lt;app_qrzlog_qsldate:8&gt;20250309
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:6&gt;HB9HLM
&lt;cont:2&gt;EU
&lt;country:11&gt;Switzerland
&lt;cqz:2&gt;14
&lt;distance:3&gt;925
&lt;dxcc:3&gt;287
&lt;email:23&gt;andre.breguet@gmail.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;14.216
&lt;freq_rx:6&gt;14.216
&lt;gridsquare:6&gt;JN36kw
&lt;ituz:2&gt;28
&lt;lat:11&gt;N046 57.441
&lt;lon:11&gt;E006 50.000
&lt;lotw_qsl_rcvd:1&gt;Y
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslrdate:8&gt;20250309
&lt;lotw_qslsdate:8&gt;20250309
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:21&gt;André qsl via HB9OCR
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250309
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:6&gt;HB9OCR
&lt;qso_date:8&gt;20250309
&lt;qso_date_off:8&gt;20250309
&lt;qth:18&gt;CH- 2017 BOUDRY/NE
&lt;rst_rcvd:2&gt;58
&lt;rst_sent:2&gt;55
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;0849
&lt;time_on:4&gt;0849
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1240858626
&lt;app_qrzlog_status:1&gt;N
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:6&gt;II8ICN
&lt;cont:2&gt;EU
&lt;country:5&gt;Italy
&lt;distance:3&gt;834
&lt;dxcc:3&gt;248
&lt;email:16&gt;iu8ceu@gmail.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;14.235
&lt;freq_rx:6&gt;14.235
&lt;gridsquare:6&gt;JN70et
&lt;lat:11&gt;N040 48.750
&lt;lon:11&gt;E014 22.500
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250309
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:51&gt;Italian Navy Coastal Radio Station Maritele Naples 
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250309
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:26&gt;DIRECT OR BEREAU VIA IQ8XS
&lt;qso_date:8&gt;20250309
&lt;qso_date_off:8&gt;20250309
&lt;qth:43&gt;Via IV Novembre, 23 Calvi Risorta -Caserta-
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;57
&lt;state:2&gt;IT
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;0852
&lt;time_on:4&gt;0852
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1240859731
&lt;app_qrzlog_qsldate:8&gt;20250309
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:5&gt;ON5DN
&lt;cont:2&gt;EU
&lt;country:7&gt;Belgium
&lt;cqz:2&gt;14
&lt;distance:4&gt;1136
&lt;dxcc:3&gt;209
&lt;email:22&gt;diane.nuyts@telenet.be
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;14.205
&lt;freq_rx:6&gt;14.205
&lt;gridsquare:8&gt;JO21FH44
&lt;ituz:2&gt;27
&lt;lat:11&gt;N051 18.702
&lt;lon:11&gt;E004 27.147
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250309
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:11&gt;Diane Nuyts
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250309
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:24&gt;VIA UBA BUREAU OR DIRECT
&lt;qso_date:8&gt;20250309
&lt;qso_date_off:8&gt;20250309
&lt;qth:8&gt;Kapellen
&lt;rst_rcvd:2&gt;55
&lt;rst_sent:2&gt;57
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;0857
&lt;time_on:4&gt;0857
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1240862931
&lt;app_qrzlog_status:1&gt;N
&lt;band:3&gt;15m
&lt;band_rx:3&gt;15m
&lt;call:5&gt;R4YAQ
&lt;cont:2&gt;EU
&lt;country:6&gt;Russia
&lt;distance:4&gt;2170
&lt;dxcc:2&gt;54
&lt;email:23&gt;alex.xusnudinov@mail.ru
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:5&gt;21.21
&lt;freq_rx:5&gt;21.21
&lt;gridsquare:6&gt;LO35xq
&lt;lat:11&gt;N055 40.680
&lt;lon:11&gt;E047 56.070
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250309
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:64&gt;ÐÐ°ÑÐ°Ñ Ð¥ÑÑÐ½ÑÑÐ´Ð¸Ð½Ð¾Ð�
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250309
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250309
&lt;qso_date_off:8&gt;20250309
&lt;qth:34&gt;пгт. Урмары, Чуваши
&lt;rst_rcvd:2&gt;55
&lt;rst_sent:2&gt;51
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;0916
&lt;time_on:4&gt;0916
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1240867459
&lt;app_qrzlog_status:1&gt;N
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:6&gt;IR0IDP
&lt;cont:2&gt;EU
&lt;country:8&gt;Sardinia
&lt;distance:4&gt;1223
&lt;dxcc:3&gt;225
&lt;email:19&gt;pnonnis48@gmail.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;14.285
&lt;freq_rx:6&gt;14.285
&lt;gridsquare:6&gt;JM49ne
&lt;iota:6&gt;EU-024
&lt;ituz:2&gt;28
&lt;lat:11&gt;N039 11.623
&lt;lon:11&gt;E009 08.793
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250309
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:54&gt;Italian Navy Coastal Radio Station - Maritele Cagliari
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250309
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:10&gt;Via IS0HMZ
&lt;qso_date:8&gt;20250309
&lt;qso_date_off:8&gt;20250309
&lt;qth:8&gt;Cagliari
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;56
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;0937
&lt;time_on:4&gt;0937
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1240868980
&lt;app_qrzlog_qsldate:8&gt;20250309
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:6&gt;ES1MER
&lt;comment:27&gt;EE-0064  Pirita Natura 2000
&lt;cont:2&gt;EU
&lt;country:7&gt;Estonia
&lt;cqz:2&gt;15
&lt;distance:4&gt;1377
&lt;dxcc:2&gt;52
&lt;email:20&gt;yake91rx@hotmail.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:5&gt;14.31
&lt;freq_rx:5&gt;14.31
&lt;gridsquare:6&gt;KO29jk
&lt;ituz:2&gt;29
&lt;lat:11&gt;N059 26.250
&lt;lon:11&gt;E024 47.520
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250309
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:17&gt;Aleksandr Tsykalo
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250309
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250309
&lt;qso_date_off:8&gt;20250309
&lt;qth:7&gt;Tallinn
&lt;rst_rcvd:2&gt;57
&lt;rst_sent:2&gt;57
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;0946
&lt;time_on:4&gt;0946
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1240872055
&lt;app_qrzlog_qsldate:8&gt;20250314
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;15m
&lt;band_rx:3&gt;15m
&lt;call:5&gt;MP7DX
&lt;cont:2&gt;EU
&lt;country:8&gt;Guernsey
&lt;distance:4&gt;1604
&lt;dxcc:3&gt;106
&lt;email:19&gt;rong4diy2@gmail.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;21.245
&lt;freq_rx:6&gt;21.245
&lt;gridsquare:6&gt;IN89rl
&lt;iota:6&gt;EU-114
&lt;lat:11&gt;N049 27.873
&lt;lon:11&gt;W002 33.918
&lt;lotw_qsl_rcvd:1&gt;Y
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslrdate:8&gt;20250313
&lt;lotw_qslsdate:8&gt;20250309
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:23&gt;N L W Radio Club Newton
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250309
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:9&gt;Via G4DIY
&lt;qso_date:8&gt;20250309
&lt;qso_date_off:8&gt;20250309
&lt;qth:4&gt;C.I.
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;55
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1001
&lt;time_on:4&gt;1001
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1241035858
&lt;app_qrzlog_qsldate:8&gt;20250310
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:4&gt;SM5X
&lt;cont:2&gt;EU
&lt;country:6&gt;Sweden
&lt;distance:4&gt;1353
&lt;dxcc:3&gt;284
&lt;email:17&gt;red@publicera.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:5&gt;14.22
&lt;freq_rx:5&gt;14.22
&lt;gridsquare:6&gt;JO89ho
&lt;lat:11&gt;N059 36.250
&lt;lon:11&gt;E016 37.500
&lt;lotw_qsl_rcvd:1&gt;Y
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslrdate:8&gt;20250309
&lt;lotw_qslsdate:8&gt;20250309
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:12&gt;Pete Arninge
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250309
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:6&gt;SM5GMZ
&lt;qso_date:8&gt;20250309
&lt;qso_date_off:8&gt;20250309
&lt;qth:9&gt;Stockholm
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1604
&lt;time_on:4&gt;1604
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1241841149
&lt;app_qrzlog_status:1&gt;N
&lt;band:3&gt;40m
&lt;band_rx:3&gt;40m
&lt;call:6&gt;IR0IDP
&lt;cont:2&gt;EU
&lt;country:8&gt;Sardinia
&lt;distance:4&gt;1223
&lt;dxcc:3&gt;225
&lt;email:19&gt;pnonnis48@gmail.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:5&gt;7.155
&lt;freq_rx:5&gt;7.155
&lt;gridsquare:6&gt;JM49ne
&lt;iota:6&gt;EU-024
&lt;ituz:2&gt;28
&lt;lat:11&gt;N039 11.623
&lt;lon:11&gt;E009 08.793
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250310
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:54&gt;Italian Navy Coastal Radio Station - Maritele Cagliari
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250310
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:10&gt;Via IS0HMZ
&lt;qso_date:8&gt;20250310
&lt;qso_date_off:8&gt;20250310
&lt;qth:8&gt;Cagliari
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;57
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;0642
&lt;time_on:4&gt;0642
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1241969755
&lt;app_qrzlog_status:1&gt;N
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:6&gt;II7ICT
&lt;cont:2&gt;EU
&lt;country:5&gt;Italy
&lt;distance:3&gt;797
&lt;dxcc:3&gt;248
&lt;email:16&gt;iz7auh@gmail.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;14.206
&lt;freq_rx:6&gt;14.206
&lt;gridsquare:6&gt;JN80ol
&lt;lat:11&gt;N040 28.332
&lt;lon:11&gt;E017 14.071
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250310
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:37&gt;COASTAL RADIO STATION MARITELE MI-600
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250310
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:44&gt;ONLY OQRS https/clublog.org/logsearch/II7ICT
&lt;qso_date:8&gt;20250310
&lt;qso_date_off:8&gt;20250310
&lt;qth:7&gt;TARANTO
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1522
&lt;time_on:4&gt;1522
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1241972992
&lt;app_qrzlog_status:1&gt;N
&lt;band:3&gt;15m
&lt;band_rx:3&gt;15m
&lt;call:5&gt;G4YRB
&lt;cont:2&gt;EU
&lt;country:7&gt;England
&lt;distance:4&gt;1619
&lt;dxcc:3&gt;223
&lt;email:12&gt;g4yrb@me.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;21.307
&lt;freq_rx:6&gt;21.307
&lt;gridsquare:6&gt;IO93cs
&lt;lat:11&gt;N053 45.022
&lt;lon:11&gt;W001 48.152
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250310
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:12&gt;John Learoyd
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250310
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250310
&lt;qso_date_off:8&gt;20250310
&lt;qth:48&gt;Central UK Located 3 miles north east of HALIFAX
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1535
&lt;time_on:4&gt;1535
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1241976881
&lt;app_qrzlog_qsldate:8&gt;20250310
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:5&gt;TA3KE
&lt;cont:2&gt;AS
&lt;country:6&gt;Turkey
&lt;distance:4&gt;1136
&lt;dxcc:3&gt;390
&lt;email:16&gt;ta3nkb@gmail.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;14.277
&lt;freq_rx:6&gt;14.277
&lt;gridsquare:6&gt;KN40ng
&lt;ituz:2&gt;39
&lt;lat:11&gt;N040 16.126
&lt;lon:11&gt;E029 05.406
&lt;lotw_qsl_rcvd:1&gt;Y
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslrdate:8&gt;20250310
&lt;lotw_qslsdate:8&gt;20250310
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:26&gt;Kemalettin (Kemal) Bilgili
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250310
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250310
&lt;qso_date_off:8&gt;20250310
&lt;qth:17&gt;Osmangazi / Bursa
&lt;rst_rcvd:2&gt;58
&lt;rst_sent:2&gt;56
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1548
&lt;time_on:4&gt;1548
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1242022310
&lt;app_qrzlog_status:1&gt;2
&lt;band:3&gt;40m
&lt;band_rx:3&gt;40m
&lt;call:6&gt;II7ICE
&lt;cont:2&gt;EU
&lt;country:5&gt;Italy
&lt;cqz:2&gt;15
&lt;distance:3&gt;769
&lt;dxcc:3&gt;248
&lt;email:24&gt;antonioressa@hotmail.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:5&gt;7.163
&lt;freq_rx:5&gt;7.163
&lt;gridsquare:6&gt;JN80xp
&lt;ituz:2&gt;28
&lt;lat:11&gt;N040 38.700
&lt;lon:11&gt;E017 57.400
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250310
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:24&gt;MARITELE BRINDISI MI-967
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250310
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:14&gt;QSL VIA IZ7WEM
&lt;qso_date:8&gt;20250310
&lt;qso_date_off:8&gt;20250310
&lt;qth:8&gt;BRINDISI
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1600
&lt;time_on:4&gt;1600
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1242048012
&lt;app_qrzlog_status:1&gt;2
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:6&gt;II9IGJ
&lt;cont:2&gt;EU
&lt;country:5&gt;Italy
&lt;cqz:2&gt;15
&lt;distance:3&gt;715
&lt;dxcc:3&gt;248
&lt;email:24&gt;info@assoradiomarinai.it
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:5&gt;14.21
&lt;freq_rx:5&gt;14.21
&lt;gridsquare:8&gt;JN62KS77
&lt;iota:6&gt;EU-025
&lt;ituz:2&gt;28
&lt;lat:11&gt;N042 46.756
&lt;lon:11&gt;E012 53.877
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250310
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:55&gt;Special Call of the Italian Navy Coastal Radio Station 
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250310
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:11&gt;via IT9MRM 
&lt;qso_date:8&gt;20250310
&lt;qso_date_off:8&gt;20250310
&lt;qth:26&gt;S.R.T. Palombara (Melilli)
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;57
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1606
&lt;time_on:4&gt;1606
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1242379535
&lt;app_qrzlog_status:1&gt;2
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:5&gt;JY4CI
&lt;cont:2&gt;AS
&lt;country:6&gt;Jordan
&lt;cqz:2&gt;20
&lt;distance:4&gt;2242
&lt;dxcc:3&gt;342
&lt;email:16&gt;jy4cia@gmail.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;14.255
&lt;freq_rx:6&gt;14.255
&lt;gridsquare:6&gt;KM71vv
&lt;ituz:2&gt;39
&lt;lat:11&gt;N031 53.574
&lt;lon:11&gt;E035 49.543
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250311
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:13&gt;RAFIQ FARMAWI
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250311
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:18&gt;QSL DIRECT TO K2AX
&lt;qso_date:8&gt;20250311
&lt;qso_date_off:8&gt;20250311
&lt;qth:5&gt;AMMAN
&lt;rst_rcvd:2&gt;56
&lt;rst_sent:2&gt;58
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;0622
&lt;time_on:4&gt;0622
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1242381151
&lt;app_qrzlog_status:1&gt;N
&lt;band:3&gt;40m
&lt;band_rx:3&gt;40m
&lt;call:6&gt;II8ICN
&lt;cont:2&gt;EU
&lt;country:5&gt;Italy
&lt;distance:3&gt;834
&lt;dxcc:3&gt;248
&lt;email:16&gt;iu8ceu@gmail.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:5&gt;7.117
&lt;freq_rx:5&gt;7.117
&lt;gridsquare:6&gt;JN70et
&lt;lat:11&gt;N040 48.750
&lt;lon:11&gt;E014 22.500
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250311
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:51&gt;Italian Navy Coastal Radio Station Maritele Naples 
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250311
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:26&gt;DIRECT OR BEREAU VIA IQ8XS
&lt;qso_date:8&gt;20250311
&lt;qso_date_off:8&gt;20250311
&lt;qth:43&gt;Via IV Novembre, 23 Calvi Risorta -Caserta-
&lt;rst_rcvd:2&gt;58
&lt;rst_sent:2&gt;57
&lt;state:2&gt;IT
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;0635
&lt;time_on:4&gt;0635
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1242382128
&lt;app_qrzlog_status:1&gt;2
&lt;band:3&gt;40m
&lt;band_rx:3&gt;40m
&lt;call:6&gt;IZ8DEP
&lt;cont:2&gt;EU
&lt;country:5&gt;Italy
&lt;cqz:2&gt;15
&lt;distance:3&gt;715
&lt;dxcc:3&gt;248
&lt;email:16&gt;iz8dep@gmail.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:5&gt;7.175
&lt;freq_rx:5&gt;7.175
&lt;gridsquare:6&gt;JN62ks
&lt;ituz:2&gt;28
&lt;lat:11&gt;N042 46.756
&lt;lon:11&gt;E012 53.877
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250311
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:14&gt;ALFREDO SCARPA
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250311
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:11&gt;ONLY DIRECT
&lt;qso_date:8&gt;20250311
&lt;qso_date_off:8&gt;20250311
&lt;qth:16&gt;MARANO DI NAPOLI
&lt;rst_rcvd:2&gt;58
&lt;rst_sent:2&gt;58
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;0641
&lt;time_on:4&gt;0641
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1242494019
&lt;app_qrzlog_qsldate:8&gt;20250311
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;15m
&lt;band_rx:3&gt;15m
&lt;call:6&gt;VA3TAL
&lt;comment:71&gt;Thank you very much! You are my first contact from Canada! Thanks a lot
&lt;cont:2&gt;NA
&lt;country:6&gt;Canada
&lt;cqz:1&gt;4
&lt;distance:4&gt;7118
&lt;dxcc:1&gt;1
&lt;email:16&gt;va3tal@gmail.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:5&gt;21.22
&lt;freq_rx:5&gt;21.22
&lt;gridsquare:6&gt;FN03fu
&lt;ituz:1&gt;4
&lt;lat:11&gt;N043 51.998
&lt;lon:11&gt;W079 32.320
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250311
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:11&gt;Joe Metallo
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250311
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:15&gt;DIRECT ONLY PLS
&lt;qso_date:8&gt;20250311
&lt;qso_date_off:8&gt;20250311
&lt;qth:9&gt;HILLSDALE
&lt;rst_rcvd:2&gt;53
&lt;rst_sent:2&gt;57
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1539
&lt;time_on:4&gt;1539
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1242495009
&lt;app_qrzlog_status:1&gt;N
&lt;band:3&gt;15m
&lt;band_rx:3&gt;15m
&lt;call:5&gt;G3ART
&lt;comment:152&gt;I'm looking at my notes here. The same thing happens as last time. We start with a strong signal and just disappears. I hope that one day we can talk :D
&lt;cont:2&gt;EU
&lt;country:7&gt;England
&lt;distance:4&gt;1488
&lt;dxcc:3&gt;223
&lt;email:28&gt;arthur@arthurwolstenholme.uk
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;21.256
&lt;freq_rx:6&gt;21.256
&lt;gridsquare:6&gt;IO92uo
&lt;iota:4&gt;none
&lt;ituz:2&gt;27
&lt;lat:11&gt;N052 36.103
&lt;lon:11&gt;W000 17.495
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250311
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:19&gt;Arthur Wolstenholme
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250311
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250311
&lt;qso_date_off:8&gt;20250311
&lt;qth:12&gt;Peterborough
&lt;rst_rcvd:2&gt;33
&lt;rst_sent:2&gt;53
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1543
&lt;time_on:4&gt;1543
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1242501355
&lt;app_qrzlog_status:1&gt;N
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:6&gt;II0IGU
&lt;cont:2&gt;EU
&lt;country:5&gt;Italy
&lt;distance:3&gt;825
&lt;dxcc:3&gt;248
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;14.264
&lt;freq_rx:6&gt;14.264
&lt;gridsquare:6&gt;JN61tf
&lt;lat:11&gt;N041 12.556
&lt;lon:11&gt;E013 35.447
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250311
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:64&gt;SPECIAL CALL for Old Italian Navy Costal Radio Station MARITELE 
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250311
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:26&gt;ONLY DIRECT QSL TO IWØBTN
&lt;qso_date:8&gt;20250311
&lt;qso_date_off:8&gt;20250311
&lt;qth:5&gt;Gaeta
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1615
&lt;time_on:4&gt;1615
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1242545665
&lt;app_qrzlog_status:1&gt;N
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:8&gt;PA/LB5UJ
&lt;cont:2&gt;EU
&lt;country:11&gt;Netherlands
&lt;cqz:2&gt;14
&lt;dxcc:3&gt;263
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;14.233
&lt;freq_rx:6&gt;14.233
&lt;ituz:2&gt;27
&lt;lat:11&gt;S000 00.000
&lt;lon:11&gt;W000 00.000
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250311
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250311
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250311
&lt;qso_date_off:8&gt;20250311
&lt;rst_rcvd:2&gt;43
&lt;rst_sent:2&gt;53
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1804
&lt;time_on:4&gt;1804
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1242545772
&lt;app_qrzlog_status:1&gt;2
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:5&gt;LB5UJ
&lt;cont:2&gt;EU
&lt;country:6&gt;Norway
&lt;cqz:2&gt;14
&lt;distance:4&gt;1478
&lt;dxcc:3&gt;266
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;14.233
&lt;freq_rx:6&gt;14.233
&lt;gridsquare:6&gt;JO59jv
&lt;ituz:2&gt;18
&lt;lat:11&gt;N059 53.750
&lt;lon:11&gt;E010 47.500
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250311
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:16&gt;Joachim Braathen
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250311
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:8&gt;via NRRL
&lt;qso_date:8&gt;20250311
&lt;qso_date_off:8&gt;20250311
&lt;qth:10&gt;Loddefjord
&lt;rst_rcvd:2&gt;43
&lt;rst_sent:2&gt;53
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1805
&lt;time_on:4&gt;1805
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1242546741
&lt;app_qrzlog_status:1&gt;N
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:6&gt;IR0IDP
&lt;cont:2&gt;EU
&lt;country:8&gt;Sardinia
&lt;distance:4&gt;1223
&lt;dxcc:3&gt;225
&lt;email:19&gt;pnonnis48@gmail.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;14.255
&lt;freq_rx:6&gt;14.255
&lt;gridsquare:6&gt;JM49ne
&lt;iota:6&gt;EU-024
&lt;ituz:2&gt;28
&lt;lat:11&gt;N039 11.623
&lt;lon:11&gt;E009 08.793
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250311
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:54&gt;Italian Navy Coastal Radio Station - Maritele Cagliari
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250311
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:10&gt;Via IS0HMZ
&lt;qso_date:8&gt;20250311
&lt;qso_date_off:8&gt;20250311
&lt;qth:8&gt;Cagliari
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1807
&lt;time_on:4&gt;1807
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1242551316
&lt;app_qrzlog_qsldate:8&gt;20250311
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;15m
&lt;band_rx:3&gt;15m
&lt;call:6&gt;EI2HPB
&lt;cont:2&gt;EU
&lt;country:7&gt;Ireland
&lt;cqz:2&gt;14
&lt;distance:4&gt;2057
&lt;dxcc:3&gt;245
&lt;email:21&gt;tradfusion@eircom.net
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;21.266
&lt;freq_rx:6&gt;21.266
&lt;gridsquare:6&gt;IO54rf
&lt;iota:6&gt;EU-115
&lt;ituz:2&gt;27
&lt;lat:11&gt;N054 12.832
&lt;lon:11&gt;W008 30.205
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250311
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:10&gt;Dave Carty
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250311
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:30&gt;QSL DIRECT, VIA BUREAU OR EQSL
&lt;qso_date:8&gt;20250311
&lt;qso_date_off:8&gt;20250311
&lt;qth:22&gt;Strandhill Road, Sligo
&lt;rst_rcvd:2&gt;57
&lt;rst_sent:2&gt;56
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1829
&lt;time_on:4&gt;1829
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1242930498
&lt;app_qrzlog_status:1&gt;2
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:6&gt;II9ICF
&lt;cont:2&gt;EU
&lt;country:5&gt;Italy
&lt;cqz:2&gt;15
&lt;distance:4&gt;1075
&lt;dxcc:3&gt;248
&lt;email:24&gt;info@assoradiomarinai.it
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;14.262
&lt;freq_rx:6&gt;14.262
&lt;gridsquare:6&gt;JM78se
&lt;iota:6&gt;EU-025
&lt;ituz:2&gt;28
&lt;lat:11&gt;N038 11.831
&lt;lon:11&gt;E015 34.037
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250312
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:64&gt;Special Call of the ex Coastal Radio Station of the Italian Navy
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250312
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:6&gt;IT9MRM
&lt;qso_date:8&gt;20250312
&lt;qso_date_off:8&gt;20250312
&lt;qth:12&gt;Messina (ME)
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1655
&lt;time_on:4&gt;1655
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1242940407
&lt;app_qrzlog_status:1&gt;N
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:5&gt;AM5VF
&lt;cont:2&gt;EU
&lt;country:5&gt;Spain
&lt;cqz:2&gt;14
&lt;distance:4&gt;1798
&lt;dxcc:3&gt;281
&lt;email:12&gt;urev@urev.es
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;14.305
&lt;freq_rx:6&gt;14.305
&lt;gridsquare:6&gt;IM99tl
&lt;ituz:2&gt;37
&lt;lat:11&gt;N039 28.700
&lt;lon:11&gt;W000 22.600
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250312
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:29&gt;Special Call for Fallas Award
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250312
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:34&gt;QSL Via Bureau or Direct with SASE
&lt;qso_date:8&gt;20250312
&lt;qso_date_off:8&gt;20250312
&lt;qth:49&gt;Unión de Radioaficionados Españoles de Valencia
&lt;rst_rcvd:2&gt;55
&lt;rst_sent:2&gt;55
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1707
&lt;time_on:4&gt;1707
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1242943171
&lt;app_qrzlog_status:1&gt;N
&lt;band:3&gt;40m
&lt;band_rx:3&gt;40m
&lt;call:5&gt;9A2CT
&lt;cont:2&gt;EU
&lt;country:7&gt;Croatia
&lt;distance:3&gt;280
&lt;dxcc:3&gt;497
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:5&gt;7.119
&lt;freq_rx:5&gt;7.119
&lt;gridsquare:6&gt;JN85et
&lt;lat:11&gt;N045 48.750
&lt;lon:11&gt;E016 22.500
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250312
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250312
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250312
&lt;qso_date_off:8&gt;20250312
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1719
&lt;time_on:4&gt;1719
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1242944085
&lt;app_qrzlog_status:1&gt;2
&lt;band:3&gt;40m
&lt;band_rx:3&gt;40m
&lt;call:7&gt;HA1NG/P
&lt;comment:40&gt;HU-0016 parks in the air Normafa mellol.
&lt;cont:2&gt;EU
&lt;country:7&gt;Hungary
&lt;cqz:2&gt;15
&lt;distance:1&gt;6
&lt;dxcc:3&gt;239
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:5&gt;7.155
&lt;freq_rx:5&gt;7.155
&lt;gridsquare:4&gt;jn97
&lt;ituz:2&gt;28
&lt;lat:11&gt;N047 30.000
&lt;lon:11&gt;E019 00.000
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250312
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:12&gt;Kornél Ács
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250312
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250312
&lt;qso_date_off:8&gt;20250312
&lt;qth:28&gt;Portable anywhere in Hungary
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1724
&lt;time_on:4&gt;1724
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1242944745
&lt;app_qrzlog_status:1&gt;N
&lt;band:3&gt;40m
&lt;band_rx:3&gt;40m
&lt;call:6&gt;II8ICN
&lt;cont:2&gt;EU
&lt;country:5&gt;Italy
&lt;distance:3&gt;834
&lt;dxcc:3&gt;248
&lt;email:16&gt;iu8ceu@gmail.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:5&gt;7.199
&lt;freq_rx:5&gt;7.199
&lt;gridsquare:6&gt;JN70et
&lt;lat:11&gt;N040 48.750
&lt;lon:11&gt;E014 22.500
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250312
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:51&gt;Italian Navy Coastal Radio Station Maritele Naples 
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250312
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:26&gt;DIRECT OR BEREAU VIA IQ8XS
&lt;qso_date:8&gt;20250312
&lt;qso_date_off:8&gt;20250312
&lt;qth:43&gt;Via IV Novembre, 23 Calvi Risorta -Caserta-
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;58
&lt;state:2&gt;IT
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1727
&lt;time_on:4&gt;1727
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1243005247
&lt;app_qrzlog_qsldate:8&gt;20250315
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:5&gt;YB0AR
&lt;comment:49&gt;My very first contact with Oceania, thanks a lot!
&lt;cont:2&gt;OC
&lt;country:9&gt;Indonesia
&lt;cqz:2&gt;28
&lt;distance:5&gt;10351
&lt;dxcc:3&gt;327
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;14.237
&lt;freq_rx:6&gt;14.237
&lt;gridsquare:6&gt;OI33jr
&lt;iota:6&gt;OC-021
&lt;ituz:2&gt;54
&lt;lat:11&gt;S006 16.300
&lt;lon:11&gt;E106 47.400
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250313
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:20&gt;Yose Ferry ( Ferry )
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250312
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:18&gt;LoTW & QRZ Logbook
&lt;qso_date:8&gt;20250312
&lt;qso_date_off:8&gt;20250312
&lt;qth:7&gt;Jakarta
&lt;rst_rcvd:2&gt;57
&lt;rst_sent:2&gt;57
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1838
&lt;time_on:4&gt;1838
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1243235519
&lt;app_qrzlog_status:1&gt;N
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:6&gt;II7ICE
&lt;cont:2&gt;EU
&lt;country:5&gt;Italy
&lt;cqz:2&gt;15
&lt;distance:3&gt;769
&lt;dxcc:3&gt;248
&lt;email:24&gt;antonioressa@hotmail.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;14.256
&lt;freq_rx:6&gt;14.256
&lt;gridsquare:6&gt;JN80xp
&lt;ituz:2&gt;28
&lt;lat:11&gt;N040 38.700
&lt;lon:11&gt;E017 57.400
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250313
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:24&gt;MARITELE BRINDISI MI-967
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250313
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:14&gt;QSL VIA IZ7WEM
&lt;qso_date:8&gt;20250313
&lt;qso_date_off:8&gt;20250313
&lt;qth:8&gt;BRINDISI
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1109
&lt;time_on:4&gt;1109
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1243373037
&lt;app_qrzlog_status:1&gt;N
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:6&gt;II8ICN
&lt;cont:2&gt;EU
&lt;country:5&gt;Italy
&lt;distance:3&gt;834
&lt;dxcc:3&gt;248
&lt;email:16&gt;iu8ceu@gmail.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;14.195
&lt;freq_rx:6&gt;14.195
&lt;gridsquare:6&gt;JN70et
&lt;lat:11&gt;N040 48.750
&lt;lon:11&gt;E014 22.500
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250313
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:51&gt;Italian Navy Coastal Radio Station Maritele Naples 
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250313
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:26&gt;DIRECT OR BEREAU VIA IQ8XS
&lt;qso_date:8&gt;20250313
&lt;qso_date_off:8&gt;20250313
&lt;qth:43&gt;Via IV Novembre, 23 Calvi Risorta -Caserta-
&lt;rst_rcvd:2&gt;57
&lt;rst_sent:2&gt;54
&lt;state:2&gt;IT
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1541
&lt;time_on:4&gt;1541
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1243388964
&lt;app_qrzlog_status:1&gt;N
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:6&gt;OZ8CTH
&lt;cont:2&gt;EU
&lt;country:7&gt;Denmark
&lt;distance:4&gt;1157
&lt;dxcc:3&gt;221
&lt;email:16&gt;fasan5@privat.dk
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:4&gt;14.2
&lt;freq_rx:4&gt;14.2
&lt;gridsquare:6&gt;JO56ah
&lt;lat:11&gt;N056 19.723
&lt;lon:11&gt;E010 02.820
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250313
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:10&gt;Peter Ravn
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250313
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250313
&lt;qso_date_off:8&gt;20250313
&lt;qth:12&gt;8370 Hadsten
&lt;rst_rcvd:2&gt;57
&lt;rst_sent:2&gt;57
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1628
&lt;time_on:4&gt;1628
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1243397127
&lt;app_qrzlog_status:1&gt;N
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:6&gt;IR0IDP
&lt;cont:2&gt;EU
&lt;country:8&gt;Sardinia
&lt;distance:4&gt;1223
&lt;dxcc:3&gt;225
&lt;email:19&gt;pnonnis48@gmail.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;14.248
&lt;freq_rx:6&gt;14.248
&lt;gridsquare:6&gt;JM49ne
&lt;iota:6&gt;EU-024
&lt;ituz:2&gt;28
&lt;lat:11&gt;N039 11.623
&lt;lon:11&gt;E009 08.793
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250313
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:54&gt;Italian Navy Coastal Radio Station - Maritele Cagliari
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250313
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:10&gt;Via IS0HMZ
&lt;qso_date:8&gt;20250313
&lt;qso_date_off:8&gt;20250313
&lt;qth:8&gt;Cagliari
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1647
&lt;time_on:4&gt;1647
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1243424759
&lt;app_qrzlog_qsldate:8&gt;20250313
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:5&gt;4X6TT
&lt;cont:2&gt;AS
&lt;country:6&gt;Israel
&lt;cqz:2&gt;20
&lt;distance:4&gt;2147
&lt;dxcc:3&gt;336
&lt;email:14&gt;amir@4x6tt.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:4&gt;14.2
&lt;freq_rx:4&gt;14.2
&lt;gridsquare:6&gt;KM72kj
&lt;ituz:2&gt;39
&lt;lat:11&gt;N032 22.788
&lt;lon:11&gt;E034 51.867
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250313
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:10&gt;Amir Bazak
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250313
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:20&gt;Direct Only To N4GNR
&lt;qso_date:8&gt;20250313
&lt;qso_date_off:8&gt;20250313
&lt;qth:22&gt;Beit Yanai PO BOX 1567
&lt;rst_rcvd:2&gt;57
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1829
&lt;time_on:4&gt;1829
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1243606673
&lt;app_qrzlog_status:1&gt;2
&lt;band:3&gt;40m
&lt;band_rx:3&gt;40m
&lt;call:5&gt;E70AB
&lt;cont:2&gt;EU
&lt;country:22&gt;Bosnia and Herzegovina
&lt;cqz:2&gt;15
&lt;distance:3&gt;333
&lt;dxcc:3&gt;501
&lt;email:22&gt;beslagicadin@gmail.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:4&gt;7.16
&lt;freq_rx:4&gt;7.16
&lt;gridsquare:6&gt;JN94hm
&lt;ituz:2&gt;28
&lt;lat:11&gt;N044 32.019
&lt;lon:11&gt;E018 39.316
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;N
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:13&gt;Adin Beslagic
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250314
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250226
&lt;qso_date_off:8&gt;20250226
&lt;qth:5&gt;Tuzla
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1814
&lt;time_on:4&gt;1814
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1243663555
&lt;app_qrzlog_status:1&gt;N
&lt;band:3&gt;15m
&lt;band_rx:3&gt;15m
&lt;call:4&gt;UI5R
&lt;cont:2&gt;EU
&lt;country:6&gt;Russia
&lt;cqz:2&gt;16
&lt;distance:4&gt;1563
&lt;dxcc:2&gt;54
&lt;email:16&gt;ra3riu@yandex.ru
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;21.275
&lt;freq_rx:6&gt;21.275
&lt;gridsquare:6&gt;KO85ss
&lt;ituz:2&gt;29
&lt;lat:11&gt;N055 46.250
&lt;lon:11&gt;E037 32.500
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250314
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:22&gt;DMITRY (DIMA) RYAZANOV
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250314
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:5&gt;RN3RQ
&lt;qso_date:8&gt;20250314
&lt;qso_date_off:8&gt;20250314
&lt;qth:33&gt;Michurinsk rayon, Tambovskaya obl
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1305
&lt;time_on:4&gt;1305
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1243664149
&lt;app_qrzlog_status:1&gt;2
&lt;band:3&gt;10m
&lt;band_rx:3&gt;10m
&lt;call:4&gt;EB5A
&lt;cont:2&gt;EU
&lt;country:5&gt;Spain
&lt;cqz:2&gt;14
&lt;distance:4&gt;1918
&lt;dxcc:3&gt;281
&lt;email:13&gt;rc2cr@mail.ru
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;28.488
&lt;freq_rx:6&gt;28.488
&lt;gridsquare:6&gt;IM97qx
&lt;ituz:2&gt;37
&lt;lat:11&gt;N037 58.700
&lt;lon:11&gt;W000 37.600
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250314
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:15&gt;YURI SAKALOUSKI
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250314
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:13&gt;VIA LOTW ONLY
&lt;qso_date:8&gt;20250314
&lt;qso_date_off:8&gt;20250314
&lt;qth:19&gt;TORREVIEJA ALICANTE
&lt;rst_rcvd:2&gt;57
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1311
&lt;time_on:4&gt;1311
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1243666511
&lt;app_qrzlog_status:1&gt;2
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:5&gt;DG5YL
&lt;comment:24&gt;parks in the air de-0329
&lt;cont:2&gt;EU
&lt;country:7&gt;Germany
&lt;cqz:2&gt;14
&lt;distance:3&gt;955
&lt;dxcc:3&gt;230
&lt;email:12&gt;dg5yl@gmx.de
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:5&gt;14.33
&lt;freq_rx:5&gt;14.33
&lt;gridsquare:6&gt;JO31qn
&lt;ituz:2&gt;28
&lt;lat:11&gt;N051 34.225
&lt;lon:11&gt;E007 22.462
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250314
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:21&gt;YL Rosemarie Buchholz
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250314
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:53&gt;via bureau, direct. Please no E-QSL! SWL are welcome!
&lt;qso_date:8&gt;20250314
&lt;qso_date_off:8&gt;20250314
&lt;qth:14&gt;44359 Dortmund
&lt;rst_rcvd:2&gt;58
&lt;rst_sent:2&gt;54
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1324
&lt;time_on:4&gt;1324
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1243668986
&lt;app_qrzlog_status:1&gt;2
&lt;band:3&gt;15m
&lt;band_rx:3&gt;15m
&lt;call:5&gt;G3WYN
&lt;comment:81&gt;Thanks for letting me in the circle for a moment, sir! All the best from Hungary!
&lt;cont:2&gt;EU
&lt;country:7&gt;England
&lt;cqz:2&gt;14
&lt;distance:4&gt;1454
&lt;dxcc:3&gt;223
&lt;email:20&gt;g3wyn@btinternet.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;21.345
&lt;freq_rx:6&gt;21.345
&lt;gridsquare:8&gt;IO91VL88
&lt;ituz:1&gt;5
&lt;lat:11&gt;N051 29.704
&lt;lon:11&gt;W000 10.547
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250314
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:10&gt;KEN GIBSON
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250314
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250314
&lt;qso_date_off:8&gt;20250314
&lt;qth:39&gt;Tylers Green, Cuckfield, HAYWARDS HEATH
&lt;rst_rcvd:2&gt;58
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1335
&lt;time_on:4&gt;1335
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1243706345
&lt;app_qrzlog_qsldate:8&gt;20250315
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;15m
&lt;band_rx:3&gt;15m
&lt;call:6&gt;GW0SOO
&lt;comment:28&gt;This has been our second qso
&lt;cont:2&gt;EU
&lt;country:5&gt;Wales
&lt;cqz:2&gt;14
&lt;distance:4&gt;1714
&lt;dxcc:3&gt;294
&lt;email:25&gt;peteantliff@hotmail.co.uk
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;21.256
&lt;freq_rx:6&gt;21.256
&lt;gridsquare:8&gt;IO81AT92
&lt;ituz:2&gt;27
&lt;lat:11&gt;N051 48.240
&lt;lon:11&gt;W003 55.380
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250314
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:15&gt;Peter J Antliff
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250314
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:11&gt;Via bureau 
&lt;qso_date:8&gt;20250314
&lt;qso_date_off:8&gt;20250314
&lt;qth:9&gt;Glanamman
&lt;rst_rcvd:2&gt;55
&lt;rst_sent:2&gt;58
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1530
&lt;time_on:4&gt;1530
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1243720198
&lt;app_qrzlog_qsldate:8&gt;20250314
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:6&gt;IU0TXS
&lt;comment:152&gt;sorry for coming in with such a low signal, i adjusted my antenna in the afternoon and it seems it's not perfect for Italy right now. Thanks for the QSO
&lt;cont:2&gt;EU
&lt;country:5&gt;Italy
&lt;cqz:2&gt;15
&lt;distance:3&gt;786
&lt;dxcc:3&gt;248
&lt;email:16&gt;iu0txs@gmail.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;14.218
&lt;freq_rx:6&gt;14.218
&lt;gridsquare:6&gt;JN62gd
&lt;iota:4&gt;none
&lt;ituz:2&gt;28
&lt;lat:11&gt;N042 09.103
&lt;lon:11&gt;E012 34.144
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250314
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:17&gt;Lorenzo Di Donato
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250314
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250314
&lt;qso_date_off:8&gt;20250314
&lt;qth:12&gt;Fiano Romano
&lt;rst_rcvd:2&gt;48
&lt;rst_sent:2&gt;58
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1612
&lt;time_on:4&gt;1612
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1243721038
&lt;app_qrzlog_status:1&gt;N
&lt;band:3&gt;15m
&lt;band_rx:3&gt;15m
&lt;call:5&gt;EF5SQ
&lt;cont:2&gt;EU
&lt;country:5&gt;Spain
&lt;cqz:2&gt;14
&lt;distance:4&gt;1743
&lt;dxcc:3&gt;281
&lt;email:34&gt;info@diplomagaiatasdecastellon.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:5&gt;21.31
&lt;freq_rx:5&gt;21.31
&lt;gridsquare:6&gt;IM99xx
&lt;ituz:2&gt;37
&lt;lat:11&gt;N039 58.704
&lt;lon:11&gt;W000 02.559
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250314
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:30&gt;Diploma Gaiatas de Castellón 
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250314
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:18&gt;VIA BURO or EA5RKD
&lt;qso_date:8&gt;20250314
&lt;qso_date_off:8&gt;20250314
&lt;qth:22&gt;Castellón de la Plana
&lt;rst_rcvd:2&gt;57
&lt;rst_sent:2&gt;54
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1617
&lt;time_on:4&gt;1617
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1243787648
&lt;app_qrzlog_qsldate:8&gt;20250314
&lt;app_qrzlog_status:1&gt;C
&lt;band:3&gt;15m
&lt;band_rx:3&gt;15m
&lt;call:6&gt;HA3MAR
&lt;cont:2&gt;EU
&lt;country:7&gt;Hungary
&lt;cqz:2&gt;15
&lt;distance:1&gt;4
&lt;dxcc:3&gt;239
&lt;email:16&gt;ha3mar@gmail.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;21.273
&lt;freq_rx:6&gt;21.273
&lt;gridsquare:6&gt;JN97ml
&lt;ituz:2&gt;28
&lt;lat:11&gt;N047 29.806
&lt;lon:11&gt;E019 01.927
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250314
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:13&gt;Marcell Nemes
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250314
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:6&gt;Direkt
&lt;qso_date:8&gt;20250314
&lt;qso_date_off:8&gt;20250314
&lt;qth:8&gt;Budapest
&lt;rst_rcvd:2&gt;55
&lt;rst_sent:2&gt;55
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1753
&lt;time_on:4&gt;1753
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1243789308
&lt;app_qrzlog_status:1&gt;N
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:5&gt;R2ZBA
&lt;cont:2&gt;EU
&lt;country:6&gt;Russia
&lt;distance:4&gt;1444
&lt;dxcc:2&gt;54
&lt;email:21&gt;natochiev1960@mail.ru
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;14.228
&lt;freq_rx:6&gt;14.228
&lt;gridsquare:6&gt;KO90ep
&lt;lat:11&gt;N050 38.700
&lt;lon:11&gt;E038 22.400
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250314
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:15&gt;Yuriy Natachiev
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250314
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250314
&lt;qso_date_off:8&gt;20250314
&lt;qth:8&gt;Belgorod
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;1758
&lt;time_on:4&gt;1758
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1244002830
&lt;app_qrzlog_status:1&gt;N
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:6&gt;HB9CCL
&lt;cont:2&gt;EU
&lt;country:11&gt;Switzerland
&lt;distance:3&gt;749
&lt;dxcc:3&gt;287
&lt;email:18&gt;weissru@bluewin.ch
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;14.241
&lt;freq_rx:6&gt;14.241
&lt;gridsquare:6&gt;JN47ng
&lt;lat:11&gt;N047 16.200
&lt;lon:11&gt;E009 07.400
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250315
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:10&gt;RUDY WEISS
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250315
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:31&gt;QSL VIA DIRECT oder E-QSL PSE !
&lt;qso_date:8&gt;20250315
&lt;qso_date_off:8&gt;20250315
&lt;qth:25&gt;CH-9642 EBNAT-KAPPEL / SG
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;0818
&lt;time_on:4&gt;0818
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1244003660
&lt;app_qrzlog_status:1&gt;S
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:6&gt;IZ2ZSF
&lt;cont:2&gt;EU
&lt;country:5&gt;Italy
&lt;cqz:2&gt;15
&lt;distance:3&gt;715
&lt;dxcc:3&gt;248
&lt;email:24&gt;s.bergamaschi@icloud.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;14.255
&lt;freq_rx:6&gt;14.255
&lt;gridsquare:6&gt;JN55EA
&lt;ituz:2&gt;28
&lt;lat:11&gt;N042 46.756
&lt;lon:11&gt;E012 53.877
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250315
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:19&gt;STEFANO BERGAMASCHI
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250315
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250315
&lt;qso_date_off:8&gt;20250315
&lt;qth:12&gt;GUSSOLA (CR)
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;0824
&lt;time_on:4&gt;0824
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1244008403
&lt;app_qrzlog_status:1&gt;N
&lt;band:3&gt;15m
&lt;band_rx:3&gt;15m
&lt;call:5&gt;OH6RM
&lt;cont:2&gt;EU
&lt;country:7&gt;Finland
&lt;cqz:2&gt;15
&lt;distance:4&gt;1744
&lt;dxcc:3&gt;224
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:5&gt;21.28
&lt;freq_rx:5&gt;21.28
&lt;gridsquare:6&gt;KP32fp
&lt;ituz:2&gt;28
&lt;lat:11&gt;N062 38.700
&lt;lon:11&gt;E026 27.400
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250315
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:13&gt;Touko Kapanen
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250315
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250315
&lt;qso_date_off:8&gt;20250315
&lt;qth:9&gt;Istunmaki
&lt;rst_rcvd:2&gt;58
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;0840
&lt;time_on:4&gt;0840
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1244009317
&lt;app_qrzlog_status:1&gt;N
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:6&gt;OR100U
&lt;cont:2&gt;EU
&lt;country:7&gt;Belgium
&lt;distance:4&gt;1091
&lt;dxcc:3&gt;209
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;14.258
&lt;freq_rx:6&gt;14.258
&lt;gridsquare:6&gt;JO20lw
&lt;lat:11&gt;N050 56.250
&lt;lon:11&gt;E004 57.500
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250315
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:24&gt;Belgian IARU Society UBA
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250315
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:9&gt;see below
&lt;qso_date:8&gt;20250315
&lt;qso_date_off:8&gt;20250315
&lt;qth:17&gt;various locations
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;59
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;0845
&lt;time_on:4&gt;0845
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1244010038
&lt;app_qrzlog_status:1&gt;2
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:6&gt;TA1MAZ
&lt;cont:2&gt;AS
&lt;country:6&gt;Turkey
&lt;cqz:2&gt;20
&lt;distance:4&gt;1064
&lt;dxcc:3&gt;390
&lt;email:17&gt;ta1maz@ta1maz.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;14.285
&lt;freq_rx:6&gt;14.285
&lt;gridsquare:6&gt;KN40jx
&lt;ituz:2&gt;39
&lt;lat:11&gt;N040 57.687
&lt;lon:11&gt;E028 49.872
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250315
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:17&gt;MEHMET ALI ZONGUR
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250315
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250315
&lt;qso_date_off:8&gt;20250315
&lt;qth:8&gt;ISTANBUL
&lt;rst_rcvd:2&gt;57
&lt;rst_sent:2&gt;57
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;0852
&lt;time_on:4&gt;0852
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1244012203
&lt;app_qrzlog_status:1&gt;2
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:5&gt;ON2JF
&lt;cont:2&gt;EU
&lt;country:7&gt;Belgium
&lt;cqz:2&gt;14
&lt;distance:4&gt;1089
&lt;dxcc:3&gt;209
&lt;email:23&gt;joseph.fuchs@telenet.be
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:5&gt;14.32
&lt;freq_rx:5&gt;14.32
&lt;gridsquare:6&gt;JO20lw
&lt;ituz:2&gt;27
&lt;lat:11&gt;N050 56.675
&lt;lon:11&gt;E004 59.268
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250315
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:9&gt;Jos Fuchs
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250315
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qso_date:8&gt;20250315
&lt;qso_date_off:8&gt;20250315
&lt;qth:13&gt;3900 Overpelt
&lt;rst_rcvd:2&gt;57
&lt;rst_sent:2&gt;57
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;0907
&lt;time_on:4&gt;0907
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&lt;app_qrzlog_logid:10&gt;1244014423
&lt;app_qrzlog_status:1&gt;2
&lt;band:3&gt;20m
&lt;band_rx:3&gt;20m
&lt;call:5&gt;EA3KE
&lt;cont:2&gt;EU
&lt;country:5&gt;Spain
&lt;cqz:2&gt;14
&lt;distance:4&gt;1643
&lt;dxcc:3&gt;281
&lt;email:20&gt;necktoni@hotmail.com
&lt;eqsl_qsl_rcvd:1&gt;N
&lt;eqsl_qsl_sent:1&gt;N
&lt;freq:6&gt;14.265
&lt;freq_rx:6&gt;14.265
&lt;gridsquare:6&gt;JN00ir
&lt;ituz:2&gt;37
&lt;lat:11&gt;N040 43.094
&lt;lon:11&gt;E000 43.566
&lt;lotw_qsl_rcvd:1&gt;N
&lt;lotw_qsl_sent:1&gt;Y
&lt;lotw_qslsdate:8&gt;20250315
&lt;mode:3&gt;SSB
&lt;my_city:3&gt;Erd
&lt;my_country:7&gt;Hungary
&lt;my_cq_zone:2&gt;15
&lt;my_gridsquare:6&gt;JN97mm
&lt;my_iota:4&gt;none
&lt;my_itu_zone:2&gt;28
&lt;my_lat:11&gt;N047 31.032
&lt;my_lon:11&gt;E019 04.336
&lt;my_name:18&gt;David Nemeth-csoka
&lt;name:16&gt;Toni Olmo Tomàs
&lt;qrzcom_qso_download_date:8&gt;20250316
&lt;qrzcom_qso_download_status:1&gt;Y
&lt;qrzcom_qso_upload_date:8&gt;20250315
&lt;qrzcom_qso_upload_status:1&gt;Y
&lt;qsl_rcvd:1&gt;N
&lt;qsl_sent:1&gt;N
&lt;qsl_via:16&gt;BUREAU OR DIRECT
&lt;qso_date:8&gt;20250315
&lt;qso_date_off:8&gt;20250315
&lt;qth:20&gt;Deltebre (Tarragona)
&lt;rst_rcvd:2&gt;59
&lt;rst_sent:2&gt;58
&lt;station_callsign:6&gt;HA7NCS
&lt;time_off:4&gt;0922
&lt;time_on:4&gt;0922
&lt;tx_pwr:3&gt;100
&lt;eor&gt;

&RESULT=OK
Saved unescaped ADIF data to ha7ncs.adif
'''

# Get API key from environment variable
API_KEY = os.getenv("QRZ_API_KEY")

if not API_KEY:
    print("Error: QRZ_API_KEY environment variable is not set.")
    exit(1)

# API endpoint
url = "https://logbook.qrz.com/api"

# Data to be sent in the POST request
data = {
    "KEY": API_KEY,
    "ACTION": "FETCH",
    "OPTIONS": "TYPE:ADIF",
}

headers = {
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
}

# Make the POST request
response = requests.post(url, data=data, headers=headers)

# Check if the request was successful
if response.status_code == 200:
    # whoever designed this, deserves a special place somewhere...
    # it's almost like a query string, but the values can contain raw '&' symbols:
    # "RESULT=success&ADIF=value & with & raw & symbols&COUNT=10"
    pattern = re.compile(r"&?([A-Z]+)=")
    tokens = pattern.split(txt)[1:]
    params = {tokens[i]: html.unescape(tokens[i + 1]) for i in range(0, len(tokens) - 1, 2)}

    if 'COUNT' in params and 'ADIF' in params:
        adif = params['ADIF']
        with open("ha7ncs.adif", "w", encoding="utf-8") as file:
            file.write(adif)
        print(f"Saved {params['COUNT']} QSO data to ha7ncs.adif")
    else:
        print("Error: couldnt parse response")
else:
    print(f"Error: {response.status_code}, {response.text}")
