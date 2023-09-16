import {
    trigger,
    transition,
    style,
    query,
    group,
    //animateChild,
    animate,
    keyframes,
} from '@angular/animations';
const OPTIONAL = { optional: true };

export const fader = trigger('routeAnimation', [
    transition('* <=> *', [
        // Set a default  style for enter and leave
        query(
            ':enter, :leave',
            [
                style({
                    position: 'absolute',
                    left: 0,
                    width: '100%',
                    opacity: 0,
                    transform: 'scale(0) translateY(100%)',
                }),
            ],
            OPTIONAL
        ),
        // Animate the new page in
        query(
            ':enter',
            [
                animate(
                    '600ms ease',
                    style({ opacity: 1, transform: 'scale(1) translateY(0)' })
                ),
            ],
            OPTIONAL
        ),
    ]),
]);

export const fade = trigger('routeAnimation', [
    transition('* <=> *', [
        // Set a default  style for enter and leave
        query(
            ':enter, :leave',
            [
                style({
                    position: 'absolute',
                    left: 0,
                    width: '100%',
                    opacity: 0,
                }),
            ],
            OPTIONAL
        ),
        // Animate the new page in
        query(
            ':enter',
            [animate('2000ms ease', style({ opacity: 1 }))],
            OPTIONAL
        ),
    ]),
]);

export const scaleFade = trigger('routeAnimation', [
    transition('* <=> *', [
        // Set a default  style for enter and leave
        query(
            ':enter, :leave',
            [
                style({
                    position: 'absolute',
                    left: 0,
                    width: '100%',
                    opacity: 0,
                    transform: 'scale(0) translateY(50%)',
                }),
            ],
            OPTIONAL
        ),
        // Animate the new page in
        query(
            ':enter',
            [
                animate(
                    '2000ms ease',
                    style({ opacity: 1, transform: 'scale(1) translateY(0)' })
                ),
            ],
            OPTIONAL
        ),
    ]),
]);

export const slider = trigger('routeAnimation', [
    transition('* => isLeft', slideTo('left')),
    transition('* => isRight', slideTo('right')),
    transition('isRight => *', slideTo('left')),
    transition('isLeft => *', slideTo('right')),
]);

function slideTo(direction: string) {
    return [
        query(
            ':enter, :leave',
            [
                style({
                    position: 'absolute',
                    top: 0,
                    [direction]: 0,
                    width: '100%',
                }),
            ],
            OPTIONAL
        ),
        query(':enter', [style({ [direction]: '-100%' })]),
        group([
            query(
                ':leave',
                [animate('600ms ease', style({ [direction]: '100%' }))],
                OPTIONAL
            ),
            query(':enter', [
                animate('600ms ease', style({ [direction]: '0%' })),
            ]),
        ]),
        // Normalize the page style... Might not be necessary

        // Required only if you have child animations on the page
        // query(':leave', animateChild()),
        // query(':enter', animateChild()),
    ];
}

export const transformer = trigger('routeAnimation', [
    transition('* => isLeft', transformTo({ x: -100, y: -100, rotate: -720 })),
    transition('* => isRight', transformTo({ x: 100, y: -100, rotate: 90 })),
    transition('isRight => *', transformTo({ x: -100, y: -100, rotate: 360 })),
    transition('isLeft => *', transformTo({ x: 100, y: -100, rotate: -360 })),
]);

function transformTo({ x = 100, y = 0, rotate = 0 }) {
    return [
        query(
            ':enter, :leave',
            [
                style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                }),
            ],
            OPTIONAL
        ),
        query(':enter', [
            style({
                transform: `translate(${x}%, ${y}%) rotate(${rotate}deg)`,
            }),
        ]),
        group([
            query(
                ':leave',
                [
                    animate(
                        '600ms ease-out',
                        style({
                            transform: `translate(${x}%, ${y}%) rotate(${rotate}deg)`,
                        })
                    ),
                ],
                OPTIONAL
            ),
            query(':enter', [
                animate(
                    '600ms ease-out',
                    style({ transform: `translate(0, 0) rotate(0)` })
                ),
            ]),
        ]),
    ];
}

export const stepper = trigger('routeAnimation', [
    transition('* <=> *', [
        query(':enter, :leave', [
            style({
                position: 'absolute',
                left: 0,
                width: '100%',
            }),
        ]),
        group([
            query(':enter', [
                animate(
                    '2000ms ease',
                    keyframes([
                        style({
                            transform: 'scale(0) translateX(100%)',
                            offset: 0,
                        }),
                        style({
                            transform: 'scale(0.5) translateX(25%)',
                            offset: 0.3,
                        }),
                        style({
                            transform: 'scale(1) translateX(0%)',
                            offset: 1,
                        }),
                    ])
                ),
            ]),
            query(':leave', [
                animate(
                    '2000ms ease',
                    keyframes([
                        style({ transform: 'scale(1)', offset: 0 }),
                        style({
                            transform: 'scale(0.5) translateX(-25%) rotate(0)',
                            offset: 0.35,
                        }),
                        style({
                            opacity: 0,
                            transform:
                                'translateX(-50%) rotate(-180deg) scale(6)',
                            offset: 1,
                        }),
                    ])
                ),
            ]),
        ]),
    ]),
]);

export const stepper2 = trigger('routeAnimation', [
    transition(
        '* => isLeft',
        stepper2To({ sign: '' })
    ),
    transition(
        '* => isRight',
        stepper2To({ sign: '-' })
    ),
    transition(
        'isRight => *',
        stepper2To({ sign: '' })
    ),
    transition(
        'isLeft => *',
        stepper2To({ sign: '-' })
    ),
]);

function stepper2To({ sign = "" }) {
    return [
        query(':enter, :leave', [
            style({
                position: 'absolute',
                left: 0,
                width: '100%',
            }),
        ]),
        group([
            query(':enter', [
                animate(
                    '2000ms ease',
                    keyframes([
                        style({
                            transform: `scale(0) translateX(${sign}100%)`,
                            offset: 0
                        }),
                        style({
                            transform: `scale(.5) translateX(${sign}25%)`,
                            offset: 0.3
                        }),
                        style({
                            transform: `scale(1) translateX(0%)`,
                            offset: 1
                        }),
                    ])
                ),
            ]),
            query(':leave', [
                animate(
                    '2000ms ease',
                    keyframes([
                        style({ transform: 'scale(1)', offset: 0 }),
                        style({
                            transform: `scale(0.5) translateX(${
                                sign == '-' ? '' : '-'
                            }25%) rotate(0)`,
                            offset: 0.35
                        }),
                        style({
                            opacity: 0,
                            transform: `scale(6) translateX(${sign == '-' ? '' : '-'}50%) rotate(-180deg)`,
                            offset: 1
                        }),
                    ])
                ),
            ]),
        ]),
    ];
}

