'use strict'

import * as Agathias from 'agathias'

import { Strategy } from 'strigoaica-strategy'

class FCM implements Strategy {
  templatesPath: string
  type: string

  logger

  // TODO: Fill config

  constructor (options) {
    this.templatesPath = options.templatesPath
    this.type = 'fcm'

    this.logger = Agathias.getChild(this.type)

    // TODO: Assign config

    // TODO: Initialize the SDK - https://firebase.google.com/docs/admin/setup
  }

  async send (templateId, data) {
    this.logger.debug({ templateId, data })

    if (data.to === undefined || data.payload === undefined) {
      return Promise.reject(new Error('Missing parameters'))
    }

    // TODO: Send messages - https://firebase.google.com/docs/cloud-messaging/admin/send-messages
  }
}

module.exports = FCM
