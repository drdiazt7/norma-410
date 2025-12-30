import {REPOS_CODIGO, REPOS_DOCUMENTACION, SHAREPOINT_ANEXOS, INSTITUCION} from './constants'


export default {
    title: INSTITUCION.DOCUMENTO,
    description: 'Políticas, procedimiento y anexos',
    base: '/norma-410/',
    head: [
        ['link', { rel: 'icon', href: '/logo1.svg' }],
    ],
    themeConfig: {
        nav: [
            {text: 'Inicio', link: '/'},
            {text: 'Procedimiento', link: '/procedimiento/'},
            {text: 'Anexos', link: '/anexos/etapa-principal/ep01-asignacion-roles-responsabilidades'},
            {text: 'Preguntas frecuentes', link: '/preguntas-frecuentes/'},
        ],
        sidebar: {
            '/procedimiento/': [
                {text: 'Antecedentes', link: '/procedimiento/'},
                {text: 'Marco normativo o referencial', link: '/procedimiento/normativo'},
                {text: 'Definiciones y abreviaturas', link: '/procedimiento/definiciones'},
                {text: 'Desarrollo (Etapas)', link: '/procedimiento/etapas'},
                {text: 'Control de Cambios', link: '/procedimiento/control-cambios'},
            ],

            '/anexos/': [
                {
                    text: 'Etapa Principal',
                    collapsed: true,
                    items: [
                        // {
                        //     text: 'Listado',
                        //     link: '/anexos/',
                        // },
                        {
                            text: 'EP01 – Asignación de Roles y Responsabilidades',
                            link: '/anexos/etapa-principal/ep01-asignacion-roles-responsabilidades',
                        },
                    ],
                },
                {
                    text: 'Etapa 0 - Inicio',
                    collapsed: true,
                    items: [
                        {
                            text: 'E0 - Acta Inicio Sistema Nuevo',
                            link: '/anexos/etapa-0/e0-acta-inicio-sistema',
                        },
                    ],
                },
                {
                    text: 'Etapa 1 - Planificación',
                    collapsed: true,
                    items: [
                        {
                            text: 'E1 - Plan del Sistema',
                            link: '/anexos/etapa-1/e1-plan-sistema',
                        },
                    ],
                },
                {
                    text: 'Etapa 2 – Solicitud de Requerimientos',
                    collapsed: true,
                    items: [
                        {
                            text: 'Formatos E2',
                            collapsed: true,
                            items: [
                                {
                                    text: 'E2 – Solicitud Formal de Requerimiento',
                                    link: '/anexos/etapa-2/e2-solicitud-requerimiento',
                                },
                                {
                                    text: 'E2 – Registro de Cambios del Sistema',
                                    link: '/anexos/etapa-2/e2-registro-cambios-sistema',
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Etapa 3 - Detalle requerimientos',
                    collapsed: true,
                    items: [
                        {
                            text: 'E3 - Requerimientos Funcionales',
                            link: '/anexos/etapa-3/e3-requerimientos-funcionales',
                        },
                        {
                            text: 'E3 - Requerimientos No Funcionales',
                            link: '/anexos/etapa-3/e3-requerimientos-no-funcionales',
                        },
                        {
                            text: 'E3 - Matriz de Trazabilidad',
                            link: '/anexos/etapa-3/e3-matriz-trazabilidad',
                        },
                    ],
                },
                {
                    text: 'Etapa 4 - Diseño',
                    collapsed: true,
                    items: [
                        {
                            text: 'E4 - Diseño de Base de Datos',
                            link: '/anexos/etapa-4/e4-diseno-base-datos',
                        },
                        {
                            text: 'E4 - Mockups / Pantallas',
                            link: '/anexos/etapa-4/e4-mockups-pantallas',
                        },
                        {
                            text: 'E4 - Acta Revisión y Aprobación del Diseño',
                            link: '/anexos/etapa-4/e4-acta-revision-aprobacion-diseno',
                        },
                    ],
                },
                {
                    text: 'Etapa 5 - Cronograma y desarrollo',
                    collapsed: true,
                    items: [
                        {
                            text: 'EP01 – Asignación de Roles y Responsabilidades',
                            link: '/anexos/etapa-5/e5-cronograma-detallado',
                        },
                    ],
                },

                {
                    text: 'Etapa 6 - Pruebas',
                    collapsed: true,
                    items: [

                        {
                            text: 'E6 - Plan de Pruebas',
                            link: '/anexos/etapa-6/e6-plan-pruebas',
                        },
                        {
                            text: 'E6 - Evidencias de Pruebas',
                            link: '/anexos/etapa-6/e6-evidencias-pruebas',
                        },
                        {
                            text: 'E6 - Registro de No Conformidades',
                            link: '/anexos/etapa-6/e6-no-conformidades',
                        },
                        {
                            text: 'E6 - Informe Consolidado de Pruebas',
                            link: '/anexos/etapa-6/e6-informe-pruebas',
                        },
                    ],
                },
                {
                    text: 'Etapa 7 - Despliegue',
                    collapsed: true,
                    items: [

                        {
                            text: 'E7 - Acta Paso a Producción',
                            link: '/anexos/etapa-7/e7-acta-paso-produccion',
                        },
                        {
                            text: 'E7 - Resultado Paso a Producción',
                            link: '/anexos/etapa-7/e7-resultado-paso-produccion',
                        },
                        {
                            text: 'E7 - Acta de Aceptación de Usuario',
                            link: '/anexos/etapa-7/e7-aceptacion-usuario',
                        },
                        {
                            text: 'E7 - Acta de Aceptación QA',
                            link: '/anexos/etapa-7/e7-aceptacion-qa',
                        },
                        {
                            text: 'E7 - Plan de Reversa',
                            link: '/anexos/etapa-7/e7-plan-reversa',
                        },
                    ],
                },
                {
                    text: 'Etapa 8 - Entrega',
                    collapsed: true,
                    items: [

                        {
                            text: 'E8 - Acta de Entrega del Sistema',
                            link: '/anexos/etapa-8/e8-acta-entrega-sistema',
                        },
                        {
                            text: 'E8 - Manual de Usuario',
                            link: '/anexos/etapa-8/e8-manual-usuario',
                        },
                        {
                            text: 'E8 - Manual Técnico',
                            link: '/anexos/etapa-8/e8-manual-tecnico',
                        },
                        {
                            text: 'E8 - Acta de Capacitación',
                            link: '/anexos/etapa-8/e8-acta-capacitacion',
                        },
                    ],
                },
                {
                    text: 'Etapa 9 - Mejoras',
                    collapsed: true,
                    items: [

                        {
                            text: 'E9 - Informe de Evaluación Post Implementación',
                            link: '/anexos/etapa-9/e9-informe-evaluacion-post',
                        },
                        {
                            text: 'E9 - Plan de Mejoras Priorizadas',
                            link: '/anexos/etapa-9/e9-plan-mejoras',
                        },
                    ],
                },

                // {text: 'Etapa 0 - Inicio', link: '/anexos/etapa0-inicio'},
                // {text: 'Etapa 1 - Planificacion', link: '/anexos/etapa1-planificacion'},
                // {text: 'Etapa 2 - Solicitud requerimientos', link: '/anexos/etapa2-solicitud-requerimientos'},
                //{text: 'Etapa 3 - Detalle requerimientos', link: '/anexos/etapa3-detalle-requerimiento'},
                //{text: 'Etapa 4 - Diseño', link: '/anexos/etapa4-diseño'},
                //{text: 'Etapa 5 - Cronograma y desarrollo', link: '/anexos/etapa5-cronograma'},
                //{text: 'Etapa 6 - Pruebas', link: '/anexos/etapa6-pruebas'},
                // {text: 'Etapa 7 - Despliegue', link: '/anexos/etapa7-despliegue'},
                //{text: 'Etapa 8 - Entrega', link: '/anexos/etapa8-entrega'},
                //{text: 'Etapa 9 - Mejoras', link: '/anexos/etapa9-mejoras'},
            ],
            '/preguntas-frecuentes/': [
                {text: 'Etapa 9 - Mejoras', link: '/anexos/etapa9-mejoras'},
            ]
        },
    },
}
