'''
Python Modules Version Specification Given in requirement.txt
'''
import cherrypy
import ConfigParser
import json
import os

class Server():

    '''def __init__(self):
        Server.notebook_name = notebook'''
    @cherrypy.expose
    def index(self):
        '''
            Render the index.html File for the Interface for the Client to edit the Zim-Wiki
            Return the Rendered HTML from the Template Engine
        '''

        return open(os.path.join(os.path.join(os.path.abspath("."), u"resources"), u'index.html'))


    @cherrypy.expose
    def generateCode(self):
        received_data = cherrypy.request.body.read()
        try:
            decoded_data = json.loads(received_data)
            code = decoded_data['code']
            filename = decoded_data['filename']
            machineid = decoded_data['id']
        except KeyError:
            return json.dumps({"status":2, "message":"Invalid Data Sent to the Server"})

        try:
            Assembler( recivedData.code )
            data_sent = {'code': "H^4f^10" }
            return json.dumps(data_sent)
        except KeyError:
            return json.dumps(data)


'''
    Setting up the Server with Specified Configuration
'''
if __name__ == '__main__':
    config = ConfigParser.RawConfigParser()
    config.read('server.conf')
    cherrypy.server.socket_host = config.get('server', 'host')
    cherrypy.server.socket_port = int(config.get('server', 'port'))
    conf = {
        '/':{
            'tools.staticdir.root': os.path.abspath(os.getcwd())
        },
        '/resources': {
            'tools.staticdir.on': True,
            'tools.staticdir.dir': './resources'
        }
    }
cherrypy.quickstart(Server(), '/', conf)
