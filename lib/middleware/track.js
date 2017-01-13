

module.exports = () => {
    var handler = (context) => {
        context.tracker.request.end();
        if (context.state.trackers) {
            var trackers = {};
            context.state.trackers.forEach((item) => {
                if (!trackers[item.type]) {
                    trackers[item.type] = [];
                }
                trackers[item.type].push(item);
            });

            if (!context.state.performances) {
                context.state.performances = {};
            }

            Object.keys(trackers).forEach((item) => {
                var val = trackers[item],
                    begin = [],
                    end = [],
                    uuidGroup = {};

                if (val && val.length) {
                    val.forEach((s) => {
                        if (s.uuid) {
                            if (!uuidGroup[s.uuid]) {
                                uuidGroup[s.uuid] = {};
                            }
                        } else {
                            uuidGroup = null;
                        }
                        if (s.begin) {
                            begin.push(+s.begin);
                            if (uuidGroup) {
                                uuidGroup[s.uuid].begin = s.begin;
                            }
                        }
                        if (s.end) {
                            end.push(+s.end);
                            if (uuidGroup) {
                                uuidGroup[s.uuid].end = s.end;
                            }
                        }
                    });
                }
                if (end.length && begin.length) {
                    context.state.performances[item] = {
                        time: Math.max.apply(Math, end) - Math.min.apply(Math, begin)
                    };
                }
                // group the tracker data by uuid. for calculate time taken for each uuid.
                if (uuidGroup) {
                    Object.keys(uuidGroup).forEach((key) => {
                        var val = uuidGroup[key];
                        if (!context.state.performances[item].detail) {
                            context.state.performances[item].detail = {};
                        }
                        if (val.end && val.begin) {
                            context.state.performances[item].detail[key] = val.end - val.begin;
                        }
                    });
                }
            });
        }
    };
    return (context, next) => {
        context.state.trackers = [];
        context.tracker = {
            begin: (type, uuid) => {
                context.state.trackers.push({
                    type: type,
                    uuid: uuid,
                    begin: new Date()
                });
            },
            end: (type, uuid) => {
                context.state.trackers.push({
                    type: type,
                    uuid: uuid,
                    end: new Date()
                });
            }
        };

        ["api", "request"].forEach((item) => {
            context.tracker[item] = {
                begin: (uuid) => {
                    context.tracker.begin(item, uuid);
                },
                end: (uuid) => {
                    context.tracker.end(item, uuid);
                }
            };
        });

        context.tracker.request.begin();



        return next().then(() => {
            handler(context);
        }).catch((ex) => {
            handler(context);
            context.throw(ex);
        });
    };
};