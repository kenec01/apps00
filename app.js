(() => {
  "use strict";
  //============================
  const __ = require("timeengine");
  const _ = require("immutable");

  const execFile = require('child_process').execFile;

  const __runDB_Mailer_check = __
    .intervalSeq(_.Seq.of(true), 0)
    .__(() => {

      f();

    });

  const f = () => {
    const child = execFile('rsync',
      ['-axAXH',
        '--info=progress2',
        '-e',
        'ssh -i /home/ken/.ssh/kenec01/id_rsa',
        'root@13.66.222.131:/hdd1000/',
        '/hdd1000/'],
      (error, stdout, stderr) => {
        if (error) {
          throw error;
        } else if (stderr) {
          __.log.t = stderr;
        } else {
          __.log.t = stdout;

          f();
        }

      });
  };

//============================
})();
